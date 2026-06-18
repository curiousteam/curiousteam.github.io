"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  contactSchema,
  PROJECT_TYPES,
  PROJECT_TYPE_LABELS,
  type ContactInput,
} from "@/domains/contact/contact.schema";
import { submitContact } from "@/domains/contact/contact.service";

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const mutation = useMutation({
    mutationFn: (input: ContactInput) => submitContact(input),
    onSuccess: (result) => {
      if (result.ok) {
        setSubmitted(true);
        setServerError(null);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setServerError(result.error);
      }
    },
    onError: () => setServerError("Unexpected error. Try again."),
  });

  const onSubmit = handleSubmit((values) => {
    setServerError(null);
    mutation.mutate(values);
  });

  const busy = isSubmitting || mutation.isPending;

  return (
    <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
      <label>
        Your name
        <input type="text" placeholder="Jane Doe" autoComplete="name" {...register("name")} />
        {errors.name ? <span className="field-error">{errors.name.message}</span> : null}
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="jane@company.com"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email ? <span className="field-error">{errors.email.message}</span> : null}
      </label>
      <label>
        Project type
        <select defaultValue="" {...register("projectType")}>
          <option value="" disabled>
            Pick one...
          </option>
          {PROJECT_TYPES.map((value) => (
            <option key={value} value={value}>
              {PROJECT_TYPE_LABELS[value]}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <span className="field-error">{errors.projectType.message}</span>
        ) : null}
      </label>
      <label>
        Tell me more
        <textarea
          placeholder="What do you need built or fixed? Share timeline, links and must-haves..."
          {...register("message")}
        />
        {errors.message ? <span className="field-error">{errors.message.message}</span> : null}
      </label>

      {serverError ? (
        <span className="field-error" role="alert">
          {serverError}
        </span>
      ) : null}

      <button
        type="submit"
        className="btn btn-primary"
        style={{ alignSelf: "flex-start", marginTop: 8 }}
        disabled={busy}
      >
        {submitted ? "Sent" : busy ? "Sending..." : "Send brief"}
        {!submitted && !busy ? (
          <svg
            className="arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        ) : null}
      </button>
    </form>
  );
}
