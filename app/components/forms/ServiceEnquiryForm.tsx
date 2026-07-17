"use client";

import React, { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { contactDetails } from "@/data/contact";
import { services, type ServiceName } from "@/data/services";

type FormValues = {
  name: string;
  email: string;
  service: ServiceName;
  currentLevel: string;
  topic: string;
  sessionType: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const serviceOptions: ServiceName[] = [
  "AI Tutoring",
  "1:1 AI Consultation",
  "E-Commerce Consulting",
  "Project Review",
  "Other",
];

const levels = [
  "Complete Beginner",
  "Beginner",
  "Intermediate",
  "Working on a Project",
  "Working Professional",
];

const sessionTypes = [
  "Online Call",
  "Tutoring Session",
  "Consultation",
  "Written Review",
  "Not Sure",
];

const ServiceEnquiryForm = ({
  initialService = "Other",
}: {
  initialService?: ServiceName;
}) => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    service: initialService,
    currentLevel: "",
    topic: "",
    sessionType: "Not Sure",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const topics = useMemo(() => {
    const match = services.find((service) => service.title === values.service);
    return match?.topics ?? ["General Enquiry", "Other"];
  }, [values.service]);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (values.name.trim().length < 2) {
      nextErrors.name = "Please enter at least two characters.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.service) nextErrors.service = "Please select a service.";
    if (!values.topic) nextErrors.topic = "Please select a topic.";
    if (values.message.trim().length < 10) {
      nextErrors.message = "Please provide at least ten characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    if (values.website || !validate()) return;

    setIsSubmitting(true);
    try {
      const submittedAt = new Date().toISOString();
      const body = [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Service: ${values.service}`,
        `Topic: ${values.topic}`,
        values.service === "AI Tutoring"
          ? `Current level: ${values.currentLevel || "Not provided"}`
          : null,
        `Preferred session type: ${values.sessionType}`,
        `Submission time: ${submittedAt}`,
        "",
        values.message,
      ]
        .filter((line) => line !== null)
        .join("\n");
      window.location.href = `${contactDetails.mailto}?subject=${encodeURIComponent(
        `${values.service} enquiry from ${values.name}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white";

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-900 sm:p-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Get in Touch
      </h2>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        This form prepares an email in your email application. No form backend
        or external email provider is currently connected.
      </p>
      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="service-website">Website</label>
          <input
            id="service-website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="service-name" className="font-semibold text-gray-800 dark:text-gray-200">Name</label>
            <input id="service-name" required minLength={2} value={values.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "service-name-error" : undefined} className={fieldClass} />
            {errors.name && <p id="service-name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="service-email" className="font-semibold text-gray-800 dark:text-gray-200">Email</label>
            <input id="service-email" type="email" required value={values.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "service-email-error" : undefined} className={fieldClass} />
            {errors.email && <p id="service-email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="service-select" className="font-semibold text-gray-800 dark:text-gray-200">Service</label>
            <select id="service-select" value={values.service} onChange={(event) => { update("service", event.target.value); update("topic", ""); }} className={fieldClass}>
              {serviceOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="service-topic" className="font-semibold text-gray-800 dark:text-gray-200">Topic</label>
            <select id="service-topic" required value={values.topic} onChange={(event) => update("topic", event.target.value)} aria-invalid={Boolean(errors.topic)} aria-describedby={errors.topic ? "service-topic-error" : undefined} className={fieldClass}>
              <option value="">Select a topic</option>
              {topics.map((topic) => <option key={topic}>{topic}</option>)}
            </select>
            {errors.topic && <p id="service-topic-error" className="mt-2 text-sm text-red-600">{errors.topic}</p>}
          </div>
        </div>
        {values.service === "AI Tutoring" && (
          <div>
            <label htmlFor="service-level" className="font-semibold text-gray-800 dark:text-gray-200">Current level</label>
            <select id="service-level" value={values.currentLevel} onChange={(event) => update("currentLevel", event.target.value)} className={fieldClass}>
              <option value="">Select your current level</option>
              {levels.map((level) => <option key={level}>{level}</option>)}
            </select>
          </div>
        )}
        <div>
          <label htmlFor="session-type" className="font-semibold text-gray-800 dark:text-gray-200">Preferred session type</label>
          <select id="session-type" value={values.sessionType} onChange={(event) => update("sessionType", event.target.value)} className={fieldClass}>
            {sessionTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="service-message" className="font-semibold text-gray-800 dark:text-gray-200">How can I help?</label>
          <textarea id="service-message" required rows={6} value={values.message} onChange={(event) => update("message", event.target.value)} placeholder="Briefly describe what you want to learn, build, review, or improve." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "service-message-error" : undefined} className={fieldClass} />
          {errors.message && <p id="service-message-error" className="mt-2 text-sm text-red-600">{errors.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60">
          <Send size={18} aria-hidden="true" /> {isSubmitting ? "Preparing Enquiry…" : "Send Enquiry"}
        </button>
        <div aria-live="polite">
          {status === "success" && <p className="rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-950/30 dark:text-green-300">Your email application has been opened with the enquiry prepared. Please review and send it.</p>}
          {status === "error" && <p className="rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-950/30 dark:text-red-300">Unable to open your email application. Please email {contactDetails.email} directly.</p>}
        </div>
      </form>
    </section>
  );
};

export default ServiceEnquiryForm;
