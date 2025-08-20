import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows hero section and tagline', async ({ page }) => {
    // Hero should be present (not enough info for selector, so check page visually for h2)
    await expect(page.getByRole('heading', { name: /All Your Health Info, One Trusted Portal/i })).toBeVisible();
  });

  test('shows all feature bullet points', async ({ page }) => {
    const features = [
      'Access your records and prescriptions instantly',
      'Book, manage, and sync appointments with ease',
      'Direct, private chat with your care team',
      'Upload/share files securely'
    ];
    for (const feature of features) {
      await expect(page.getByText(feature, { exact: true })).toBeVisible();
    }
  });

  test('shows testimonial with ShieldCheck icon', async ({ page }) => {
    // Testimonial quote
    await expect(page.getByText('My health info feels protected and always at my fingertips!', { exact: false })).toBeVisible();
    await expect(page.getByText('— A BlueShield Patient')).toBeVisible();
    // Icon is a svg with class w-12 h-12 text-blue-700
    const shieldIcon = page.locator('svg.w-12.h-12.text-blue-700');
    await expect(shieldIcon).toBeVisible();
  });

  test('Experience BlueShield Now button navigates to signup', async ({ page }) => {
    const signupBtn = page.getByRole('link', { name: /Experience BlueShield Now/i });
    await expect(signupBtn).toBeVisible();
    await signupBtn.click();
    await expect(page).toHaveURL('/signup');
  });

  test('navigation bar is visible on homepage', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible();
  });
});
