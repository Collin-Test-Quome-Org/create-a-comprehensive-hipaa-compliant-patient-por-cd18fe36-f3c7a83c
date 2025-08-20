// homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the Hero component (by presence of Experience BlueShield Now button)', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Experience BlueShield Now/i })).toBeVisible();
  });

  test('shows correct heading and feature list', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /All Your Health Info, One Trusted Portal/i })
    ).toBeVisible();
    await expect(page.getByText('Access your records and prescriptions instantly')).toBeVisible();
    await expect(page.getByText('Book, manage, and sync appointments with ease')).toBeVisible();
    await expect(page.getByText('Direct, private chat with your care team')).toBeVisible();
    await expect(page.getByText('Upload/share files securely')).toBeVisible();
  });

  test('shows testimonial card', async ({ page }) => {
    await expect(page.getByText('My health info feels protected and always at my fingertips!', { exact: false })).toBeVisible();
    await expect(page.getByText(/A BlueShield Patient/)).toBeVisible();
  });

  test('Experience BlueShield Now button navigates to signup', async ({ page }) => {
    await page.getByRole('button', { name: /Experience BlueShield Now/i }).click();
    await expect(page).toHaveURL('/signup');
  });

  test('navigation bar is visible and sticky', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    // Sticky effect can't be tested directly; but navigation should remain visible after scroll
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(nav).toBeVisible();
  });
});
