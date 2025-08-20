// Navigation bar integration and accessibility tests
import { test, expect } from '@playwright/test';

test.describe('Navigation bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('logo is visible and links to home', async ({ page }) => {
    const logoLink = page.getByRole('link', { name: /MedLock Home/i });
    await expect(logoLink).toBeVisible();
    await logoLink.click();
    await expect(page).toHaveURL('/');
  });

  test('all main nav links are present and route correctly', async ({ page }) => {
    const navLinks = [
      { text: 'Records', path: '/records' },
      { text: 'Appointments', path: '/appointments' },
      { text: 'Prescriptions', path: '/prescriptions' },
      { text: 'Messaging', path: '/messages' },
      { text: 'Notifications', path: '/notifications' },
      { text: 'Uploads', path: '/uploads' }
    ];
    for (const { text, path } of navLinks) {
      const link = page.getByRole('link', { name: new RegExp(text, 'i') });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(path);
      // Navigate back for next iteration
      await page.goto('/');
    }
  });

  test('auth links are present and route', async ({ page }) => {
    const login = page.locator('#nav-login');
    const signup = page.locator('#nav-signup');
    await expect(login).toBeVisible();
    await expect(signup).toBeVisible();
    await login.click();
    await expect(page).toHaveURL('/login');
    await page.goto('/');
    await signup.click();
    await expect(page).toHaveURL('/signup');
  });

  test('active nav link is highlighted', async ({ page }) => {
    await page.goto('/prescriptions');
    const prescriptionsLink = page.getByRole('link', { name: /Prescriptions/i });
    await expect(prescriptionsLink).toHaveClass(/bg-blue-100/);
    await expect(prescriptionsLink).toHaveAttribute('aria-current', 'page');
  });

  test('navigation is accessible by keyboard', async ({ page }) => {
    await page.keyboard.press('Tab'); // focus logo
    await expect(page.locator('a[aria-label="MedLock Home"]')).toBeFocused();
    // Tab through main links
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('Tab');
    }
    // Should focus on the last nav link (Sign Up)
    await expect(page.locator('#nav-signup')).toBeFocused();
  });
});
