import { test, expect } from "@playwright/test";

test.describe("Curious Team homepage", () => {
  test("hero headline renders and primary CTA is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("design");
    await expect(page.getByRole("link", { name: /See the work/i })).toBeVisible();
  });

  test("section index rail anchors to sections", async ({ page }) => {
    await page.goto("/");
    const rail = page.locator(".section-index");
    await expect(rail).toBeVisible();
  });

  test("contact channels are visible", async ({ page }) => {
    await page.goto("/#contact");
    await expect(
      page.getByRole("link", { name: /Email\s*curiousteambd@gmail.com/i }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /GitHub\s*@curiousteam/i })).toBeVisible();
  });
});
