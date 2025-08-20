import { test, expect } from '@playwright/test';

// Tests for the Navigation component and routing

test.describe('Navigation bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays logo and MedLock brand', async ({ page }) => {
    // Logo is always an <img> with src /branding/assets/logo-0.png
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    await expect(page.getByRole('link', { name: /MedLock Home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /MedLock Home/i })).toContainText('MedLock');
  });

  test('shows all main navigation links', async ({ page }) => {
    // Test for nav links
    const navLinks = [
      { label: 'Records', path: '/records' },
      { label: 'Appointments', path: '/appointments' },
      { label: 'Prescriptions', path: '/prescriptions' },
      { label: 'Messaging', path: '/messages' },
      { label: 'Notifications', path: '/notifications' },
      { label: 'Uploads', path: '/uploads' }
    ];
    for (const { label, path } of navLinks) {
      const link = page.getByRole('link', { name: new RegExp(label, 'i') });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', path);
    }
  });

  test('shows auth links with correct ids', async ({ page }) => {
    const loginLink = page.locator('#nav-login');
    const signupLink = page.locator('#nav-signup');
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveAttribute('href', '/login');
    await expect(signupLink).toBeVisible();
    await expect(signupLink).toHaveAttribute('href', '/signup');
  });

  test('navigates to all main pages from nav', async ({ page }) => {
    const pages = [
      { label: 'Records', path: '/records' },
      { label: 'Appointments', path: '/appointments' },
      { label: 'Prescriptions', path: '/prescriptions' },
      { label: 'Messaging', path: '/messages' },
      { label: 'Notifications', path: '/notifications' },
      { label: 'Uploads', path: '/uploads' }
    ];
    for (const { label, path } of pages) {
      await page.getByRole('link', { name: new RegExp(label, 'i') }).click();
      await expect(page).toHaveURL(path);
      // Navigation bar should persist
      await expect(page.locator('nav')).toBeVisible();
      // Go back to home for next link
      await page.getByRole('link', { name: /MedLock Home/i }).click();
      await expect(page).toHaveURL('/');
    }
  });

  test('navigates to login and signup via auth links', async ({ page }) => {
    await page.locator('#nav-login').click();
    await expect(page).toHaveURL('/login');
    await page.getByRole('link', { name: /MedLock Home/i }).click();
    await page.locator('#nav-signup').click();
    await expect(page).toHaveURL('/signup');
  });

  test('active nav link is highlighted', async ({ page }) => {
    // Navigate to Appointments and check active state
    await page.getByRole('link', { name: /Appointments/i }).click();
    // The Appointments link should have bg-blue-100 and text-blue-900
    const appointmentsLink = page.getByRole('link', { name: /Appointments/i });
    await expect(appointmentsLink).toHaveClass(/bg-blue-100/);
    await expect(appointmentsLink).toHaveClass(/text-blue-900/);
  });
});
