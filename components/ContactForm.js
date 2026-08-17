"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { SERVICE_PREVIEW, COMPANY } from "./siteData";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    if (error) setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSent(true);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      console.error("Form submit error:", err);
      setError(err.message || "An unexpected error occurred. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Success Notification */}
      {sent && (
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/90 p-4 text-emerald-900 shadow-sm transition-all duration-300">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-emerald-500 text-white shadow-sm">
            <Icon.checkCircle width={18} height={18} />
          </span>
          <div className="text-sm">
            <p className="font-bold text-emerald-950">Enquiry Sent Successfully!</p>
            <p className="mt-0.5 text-emerald-800">
              Thank you for reaching out. Our team has received your details and will call you back shortly.
            </p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {error && (
        <div className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50/90 p-4 text-rose-900 shadow-sm transition-all duration-300">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-rose-500 text-white shadow-sm">
            <Icon.x width={18} height={18} />
          </span>
          <div className="text-sm">
            <p className="font-bold text-rose-950">Submission Issue</p>
            <p className="mt-0.5 text-rose-800">{error}</p>
          </div>
        </div>
      )}

      {/* Inputs Row 1: Name & Phone */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            required
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="e.g. Rahul Sharma"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="e.g. +91 98765 43210"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
          />
        </div>
      </div>

      {/* Input: Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
          Email Address <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="e.g. rahul@example.com"
          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
        />
      </div>

      {/* Select: Service */}
      <div>
        <label htmlFor="service" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
          Service Required
        </label>
        <select
          id="service"
          value={form.service}
          onChange={update("service")}
          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
        >
          <option value="">Select a service (or General Enquiry)</option>
          {SERVICE_PREVIEW.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Commercial AMC">Commercial Pest AMC</option>
          <option value="Residential Full Home Pest Control">Residential Full Home Pest Control</option>
          <option value="Other / Special Inspection">Other / Special Inspection</option>
        </select>
      </div>

      {/* Textarea: Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
          Message / Problem Details <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about the pest issue, property size, or preferred inspection time..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="group relative flex w-full items-center justify-center gap-2.5 rounded-full bg-teal py-3.5 px-6 font-head text-sm font-bold text-white shadow-xl shadow-teal/20 transition-all duration-300 hover:bg-teal-700 hover:shadow-teal/30 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Sending Enquiry...</span>
          </>
        ) : (
          <>
            <Icon.mail width={18} height={18} />
            <span>Send Enquiry / Book Inspection</span>
            <Icon.arrow
              width={14}
              height={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      {/* Call alternative footer note */}
      <p className="text-center text-xs text-slate-500 pt-1">
        Need urgent assistance? Call us directly at{" "}
        <a
          href={`tel:${COMPANY.phone}`}
          className="font-bold text-teal hover:underline"
        >
          {COMPANY.phone}
        </a>
      </p>
    </form>
  );
}
