import { expect, test } from '@playwright/test';

test('home page has expected h1 with text Billiyhills', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText("Billiyhills");
});

test('home page has md_files', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.md_files')).toBeVisible();
})
