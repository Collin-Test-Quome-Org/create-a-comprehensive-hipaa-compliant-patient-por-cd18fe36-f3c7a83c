import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows logo and MedLock brand', async ({ page }) => {
    // Logo image
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    // Brand text
    await expect(page.getByText('MedLock', { exact: true })).toBeVisible();
  });

  test('shows navigation links with correct labels', async ({ page }) => {
    const expectedLinks = [
      'Records',
      'Appointments',
      'Prescriptions',
      'Messaging',
      'Notifications',
      'Uploads',
      'Login',
      'Sign Up'
    ];
    for (const label of expectedLinks) {
      await expect(page.getByRole('link', { name: label })).toBeVisible();
    }
  });

  test('navigates to Appointments page when clicking Appointments link', async ({ page }) => {
    await page.getByRole('link', { name: 'Appointments' }).click();
    await expect(page).toHaveURL(/\/appointments$/);
  });

  test('active state highlights current route', async ({ page }) => {
    await page.getByRole('link', { name: 'Prescriptions' }).click();
    await expect(page).toHaveURL(/\/prescriptions$/);
    // The active link should have bg-blue-100 and text-blue-900
    const activeLink = page.getByRole('link', { name: 'Prescriptions' });
    await expect(activeLink).toHaveClass(/bg-blue-100/);
    await expect(activeLink).toHaveClass(/text-blue-900/);
  });

  test('login and signup links work and have ids', async ({ page }) => {
    await expect(page.locator('a#nav-login')).toHaveAttribute('href', '/login');
    await expect(page.locator('a#nav-signup')).toHaveAttribute('href', '/signup');
    await page.locator('a#nav-login').click();
    await expect(page).toHaveURL(/\/login$/);
    await page.goto('/');
    await page.locator('a#nav-signup').click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('home link (logo and brand) navigates to root', async ({ page }) => {
    await page.goto('/appointments');
    await page.getByRole('link', { name: /MedLock Home/ }).click();
    await expect(page).toHaveURL('/');
  });

  test('navigation is accessible by keyboard', async ({ page }) => {
    await page.keyboard.press('Tab'); // Focus logo
    await expect(page.getByRole('link', { name: /MedLock Home/ })).toBeFocused();
    await page.keyboard.press('Tab'); // Focus Records
    await expect(page.getByRole('link', { name: 'Records' })).toBeFocused();
    // Keep tabbing to Login
    for (let i = 0; i < 6; i++) await page.keyboard.press('Tab');
    await expect(page.locator('a#nav-login')).toBeFocused();
  });
});
