// navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders MedLock logo and branding', async ({ page }) => {
    const logoImg = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logoImg).toBeVisible();
    await expect(page.getByRole('link', { name: /MedLock Home/i })).toBeVisible();
    await expect(page.getByText('MedLock', { exact: true })).toBeVisible();
  });

  test('shows all navigation links', async ({ page }) => {
    const navLinks = [
      { label: 'Records', path: '/records' },
      { label: 'Appointments', path: '/appointments' },
      { label: 'Prescriptions', path: '/prescriptions' },
      { label: 'Messaging', path: '/messages' },
      { label: 'Notifications', path: '/notifications' },
      { label: 'Uploads', path: '/uploads' },
    ];
    for (const { label } of navLinks) {
      await expect(page.getByRole('link', { name: label })).toBeVisible();
    }
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('indicates active nav link on current route', async ({ page }) => {
    await page.click('a:has-text("Appointments")');
    await expect(page).toHaveURL(/\/appointments/);
    const activeLink = page.getByRole('link', { name: 'Appointments' });
    await expect(activeLink).toHaveAttribute('aria-current', 'page');
    await expect(activeLink).toHaveClass(/bg-blue-100/);
  });

  test('navigates to all top-level routes', async ({ page }) => {
    const routes = [
      { label: 'Records', path: '/records' },
      { label: 'Appointments', path: '/appointments' },
      { label: 'Prescriptions', path: '/prescriptions' },
      { label: 'Messaging', path: '/messages' },
      { label: 'Notifications', path: '/notifications' },
      { label: 'Uploads', path: '/uploads' },
      { label: 'Login', path: '/login' },
      { label: 'Sign Up', path: '/signup' },
    ];
    for (const { label, path } of routes) {
      await page.click(`a:has-text("${label}")`);
      await expect(page).toHaveURL(path);
      // Go back to home for next check
      await page.click('a[aria-label="MedLock Home"]');
    }
  });

  test('navigation is accessible by keyboard', async ({ page }) => {
    await page.keyboard.press('Tab'); // focus home link
    await expect(page.locator('a[aria-label="MedLock Home"]')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Records' })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Appointments' })).toBeFocused();
  });

  test('login and sign up links have correct IDs', async ({ page }) => {
    await expect(page.locator('#nav-login')).toBeVisible();
    await expect(page.locator('#nav-signup')).toBeVisible();
  });
});
