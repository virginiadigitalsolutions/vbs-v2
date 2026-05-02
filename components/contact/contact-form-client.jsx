"use client";

import { useState } from "react";

import { contactSubjects } from "@/components/contact/contact-data";
import ContactSectionEyebrow from "@/components/contact/section-eyebrow";
import CTAButton from "@/components/ui/cta-button";

const initialForm = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactFormClient() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit contact form");
      }

      setFormData(initialForm);
      setStatus({
        type: "success",
        message: "Your message has been saved successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="vbs-card p-8 lg:p-10">
      <ContactSectionEyebrow>Get In Touch</ContactSectionEyebrow>
      <h2 className="mt-6 font-heading text-4xl leading-tight text-slate-950">
        Send your message with the right context
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        Share your question, feedback, or collaboration interest with a little
        context so the response can be more useful and relevant.
      </p>

      <form className="mt-10 grid gap-6" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <label
            htmlFor="full-name"
            className="text-sm font-semibold text-slate-700"
          >
            Full Name
          </label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={updateField}
            placeholder="Enter your full name"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
            required
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="email-address"
            className="text-sm font-semibold text-slate-700"
          >
            Email Address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            value={formData.email}
            onChange={updateField}
            placeholder="Enter your email address"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
            required
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="subject"
            className="text-sm font-semibold text-slate-700"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={updateField}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
            required
          >
            <option value="" disabled>
              Select a subject
            </option>
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-slate-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={updateField}
            placeholder="Tell us a little about your question or enquiry"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
            required
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <CTAButton type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </CTAButton>
          {status.message ? (
            <p
              className={
                status.type === "success"
                  ? "text-sm font-medium text-emerald-700"
                  : "text-sm font-medium text-rose-700"
              }
            >
              {status.message}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
