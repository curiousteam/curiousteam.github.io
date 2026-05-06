import { describe, expect, it } from "vitest";
import { contactSchema } from "@/domains/contact/contact.schema";

describe("contactSchema", () => {
  const valid = {
    name: "Jane Doe",
    email: "jane@example.com",
    projectType: "ai-agent" as const,
    message: "I want to build an autonomous research assistant for my team.",
  };

  it("accepts a fully valid brief", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects name shorter than 2 characters", () => {
    const result = contactSchema.safeParse({ ...valid, name: "A" });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = contactSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects messages shorter than 20 characters", () => {
    const result = contactSchema.safeParse({ ...valid, message: "too short" });
    expect(result.success).toBe(false);
  });

  it("rejects an unknown project type", () => {
    const result = contactSchema.safeParse({ ...valid, projectType: "wat" as never });
    expect(result.success).toBe(false);
  });

  it("trims whitespace from name and email", () => {
    const result = contactSchema.safeParse({
      ...valid,
      name: "  Jane  ",
      email: "  jane@example.com  ",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Jane");
      expect(result.data.email).toBe("jane@example.com");
    }
  });
});
