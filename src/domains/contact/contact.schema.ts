import { z } from "zod";

export const PROJECT_TYPES = [
  "ai-agent",
  "full-stack",
  "wordpress",
  "shopify",
  "landing",
  "bug-fix",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  "ai-agent": "AI agent / workflow",
  "full-stack": "Full-stack web app",
  wordpress: "WordPress site",
  shopify: "Shopify store",
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
