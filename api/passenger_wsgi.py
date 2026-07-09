import sys
import os

# Add the current directory to the Python path
sys.path.insert(0, os.path.dirname(__file__))

# Import the FastAPI app from index.py
from index import app

# Convert the ASGI app (FastAPI) to WSGI using FastAPI’s WSGIMiddleware
from fastapi.middleware.wsgi import WSGIMiddleware
application = WSGIMiddleware(app)
