import type { ContactInput } from "./contact.schema";
import type { ContactSubmissionResult } from "./contact.types";
import { PROJECT_TYPE_LABELS } from "./contact.schema";

const FORMSPREE_ENDPOINT = "https://formspree.io/f";

/** Posts a brief to Formspree. The single seam to swap when a real backend lands. */
export async function submitContact(input: ContactInput): Promise<ContactSubmissionResult> {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  if (!formId || formId === "your-formspree-form-id") {
    return { ok: false, error: "Contact form not configured. Set NEXT_PUBLIC_FORMSPREE_ID." };
  }

  try {
    const response = await fetch(`${FORMSPREE_ENDPOINT}/${formId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        projectType: PROJECT_TYPE_LABELS[input.projectType],
        message: input.message,
      }),
    });

    if (!response.ok) {
      return { ok: false, error: `Submission failed (${response.status}). Try again later.` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Check your connection and try again." };
  }
}
