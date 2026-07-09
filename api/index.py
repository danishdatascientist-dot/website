import os
from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv, find_dotenv
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_community.chat_models import ChatOpenAI
from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone

# -----------------------------
# 🔧 Load Environment Variables
# -----------------------------
load_dotenv(find_dotenv())

OPENAI_API_KEY = os.getenv("OPEN_API_KEY")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
PINECONE_ENVIRONMENT = os.getenv("PINECONE_ENVIRONMENT")
INDEX_NAME = "chat"

# -----------------------------
# ❗ Validate Required Keys
# -----------------------------
if not all([OPENAI_API_KEY, PINECONE_API_KEY, PINECONE_ENVIRONMENT]):
    raise RuntimeError("Missing one or more required environment variables.")

# -----------------------------
# 🔌 Initialize Pinecone & Vector Store
# -----------------------------
pc = Pinecone(api_key=PINECONE_API_KEY)
existing_indexes = [idx["name"] for idx in pc.list_indexes()]

if INDEX_NAME not in existing_indexes:
    raise RuntimeError(f"Pinecone index '{INDEX_NAME}' does not exist.")

index = pc.Index(INDEX_NAME)
embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
vector_store = PineconeVectorStore(index=index, embedding=embeddings)

# -----------------------------
# 🚀 FastAPI App Initialization
# -----------------------------
app = FastAPI(
    title="AI Chat API",
    docs_url="/api/py/docs",
    openapi_url="/api/py/openapi.json"
)

# Allow CORS from frontend (you can restrict this to your domain)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://www.danishagentic.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# ✅ Health Check Endpoint
# -----------------------------
@app.get("/api/py/health")
def health_check():
    return {"status": "ok"}

# -----------------------------
# 🤖 Chat Endpoint
# -----------------------------
@app.post("/api/py/chat")
async def chat_with_bot(user_input: str = Form(...)):
    if not user_input.strip():
        raise HTTPException(status_code=400, detail="User input cannot be empty.")

    try:
        # 1. Retrieve top relevant documents
        results = vector_store.similarity_search(user_input, k=4)
        if not results:
            raise HTTPException(status_code=404, detail="No relevant documents found.")

        # 2. Prepare context from results
        context = "\n\n".join([res.page_content for res in results])

        # 3. Define Prompt
        prompt_template = PromptTemplate(
            input_variables=["context", "question"],
            template="""
You are a friendly and helpful chatbot. When the user greets you, respond warmly and enthusiastically.
If they ask a question, give a clear, concise answer in a conversational tone.
Use the context to form your response naturally. If information is missing, politely say so and offer to help via email.

Context: {context}
Question: {question}

Your response:
"""
        )

        # 4. Run LLM Chain
        llm = ChatOpenAI(openai_api_key=OPENAI_API_KEY)
        chain = LLMChain(llm=llm, prompt=prompt_template)
        response = chain.run({"context": context, "question": user_input})

        return {"response": response}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")
