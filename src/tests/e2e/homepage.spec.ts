import { test, expect } from "@playwright/test";

test.describe("Curious Team homepage", () => {
  test("hero headline renders and primary CTA is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("manage");
    await expect(page.getByRole("link", { name: /See the work/i })).toBeVisible();
  });

  test("section index rail anchors to sections", async ({ page }) => {
    await page.goto("/");
    const rail = page.locator(".section-index");
    await expect(rail).toBeVisible();
  });

  test("contact form validates required fields", async ({ page }) => {
    await page.goto("/#contact");
    await page.getByRole("button", { name: /Send brief/i }).click();
    await expect(page.locator(".field-error").first()).toBeVisible();
  });
});
