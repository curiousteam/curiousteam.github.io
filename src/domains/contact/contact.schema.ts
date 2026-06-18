import { z } from "zod";

export const PROJECT_TYPES = [
  "web-app",
  "wordpress",
  "frontend",
  "api-payment",
  "landing",
  "bug-fix",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  "web-app": "Custom web application",
  wordpress: "WordPress site",
  frontend: "Website / frontend build",
  "api-payment": "API / payment integration",
  landing: "Landing page",
  "bug-fix": "Bug fix / rescue",
};

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Enter a valid email"),
  projectType: z.enum(PROJECT_TYPES),
  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be 2000 characters or less"),
});

export type ContactInput = z.infer<typeof contactSchema>;
