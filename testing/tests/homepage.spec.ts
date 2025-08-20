import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {
  test('renders homepage hero and features', async ({ page }) => {
    await page.goto('/');
    // Hero component (check for presence of prominent heading/button)
    // The Hero is imported but not shown here; check that the hero is present by a heading or main area
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    // Features section
    await expect(page.getByRole('heading', { name: 'Why PortalGuard?' })).toBeVisible();
    // There are 4 feature cards
    await expect(page.getByRole('heading', { name: 'Bank-grade Security' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Appointments & Reminders' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Prescriptions at a Tap' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Secure Messaging' })).toBeVisible();
  });

  test('feature descriptions are present', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Your data is guarded by leading encryption and privacy protocols. Only you and your care team can access it.')).toBeVisible();
    await expect(page.getByText('Book, manage, and get notified for appointments, with a beautiful, stress-free calendar.')).toBeVisible();
    await expect(page.getByText('Order refills, track medications, and chat with your pharmacist directly through PortalGuard.')).toBeVisible();
    await expect(page.getByText('Chat with your doctor or care team, knowing every message is private and protected.')).toBeVisible();
  });

  test('CTA button navigates to signup', async ({ page }) => {
    await page.goto('/');
    const ctaBtn = page.locator('#cta-try-now-btn');
    await expect(ctaBtn).toBeVisible();
    await expect(ctaBtn).toHaveText('Try PortalGuard Now');
    await ctaBtn.click();
    await expect(page).toHaveURL(/\/signup/);
  });

  test('homepage is accessible by keyboard (Tab navigation)', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab'); // Focus logo
    await expect(page.getByRole('img')).toBeFocused();
    await page.keyboard.press('Tab'); // Portal link
    await expect(page.getByRole('link', { name: 'Portal' })).toBeFocused();
    await page.keyboard.press('Tab'); // About link
    await expect(page.getByRole('link', { name: 'About' })).toBeFocused();
    // Continue tabbing to Login button
    await page.keyboard.press('Tab'); // Contact link
    await page.keyboard.press('Tab'); // Login button
    await expect(page.locator('#nav-login-btn')).toBeFocused();
  });
});
