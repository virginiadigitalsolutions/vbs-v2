"use client";

import { useState } from "react";

export default function AdminAuthForm({ hasAdminUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(
        hasAdminUser ? "/api/admin/auth/login" : "/api/admin/auth/setup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Authentication failed.");
      }

      window.location.href = "/admin";
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Authentication failed.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-slate-700">Email</span>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="admin@example.com"
          required
          className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-slate-700">Password</span>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={hasAdminUser ? "Enter password" : "Create password"}
          required
          minLength={6}
          className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-teal-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting
          ? hasAdminUser
            ? "Signing In..."
            : "Creating..."
          : hasAdminUser
            ? "Sign In"
            : "Create Admin"}
      </button>

      {status.message ? (
        <p className="text-sm font-medium text-rose-700">{status.message}</p>
      ) : null}
    </form>
  );
}
