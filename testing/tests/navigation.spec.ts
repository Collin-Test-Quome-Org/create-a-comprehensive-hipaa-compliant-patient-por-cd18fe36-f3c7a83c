import { test, expect } from '@playwright/test';

test.describe('Navigation Component', () => {
  test('Navigation bar renders with logo and all nav links', async ({ page }) => {
    await page.goto('/');
    // Logo present
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    // Brand name
    await expect(page.getByRole('link', { name: /MedLock Home/i })).toBeVisible();
    await expect(page.getByText('MedLock')).toBeVisible();
    // Navigation links
    for (const label of ['Records', 'Appointments', 'Prescriptions', 'Messaging', 'Notifications', 'Uploads']) {
      await expect(page.getByRole('link', { name: new RegExp(label, 'i') })).toBeVisible();
    }
    // Auth links
    await expect(page.getByRole('link', { name: /Login/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Sign Up/i })).toBeVisible();
  });

  test('Navigation links route to correct pages and highlight active link', async ({ page }) => {
    await page.goto('/');
    // List of nav items and their paths
    const navLinks = [
      { label: 'Records', path: '/records' },
      { label: 'Appointments', path: '/appointments' },
      { label: 'Prescriptions', path: '/prescriptions' },
      { label: 'Messaging', path: '/messages' },
      { label: 'Notifications', path: '/notifications' },
      { label: 'Uploads', path: '/uploads' },
    ];
    for (const { label, path } of navLinks) {
      await page.getByRole('link', { name: label }).click();
      await expect(page).toHaveURL(path);
      // Check that the nav link has the active class (bg-blue-100 text-blue-900)
      const navLink = page.getByRole('link', { name: label });
      await expect(navLink).toHaveClass(/bg-blue-100/);
      // Go back to home for next iteration
      await page.getByRole('link', { name: /MedLock Home/i }).click();
      await expect(page).toHaveURL('/');
    }
  });

  test('Auth links navigate to login and signup pages', async ({ page }) => {
    await page.goto('/');
    // Login link
    await page.getByRole('link', { name: /Login/i }).click();
    await expect(page).toHaveURL('/login');
    // Go back home
    await page.getByRole('link', { name: /MedLock Home/i }).click();
    // Signup link
    await page.getByRole('link', { name: /Sign Up/i }).click();
    await expect(page).toHaveURL('/signup');
  });

  test('Navigation bar is sticky at the top', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav');
    // Check position fixed/sticky
    const position = await nav.evaluate((el) => window.getComputedStyle(el).position);
    expect(['sticky', 'fixed']).toContain(position);
  });
});
