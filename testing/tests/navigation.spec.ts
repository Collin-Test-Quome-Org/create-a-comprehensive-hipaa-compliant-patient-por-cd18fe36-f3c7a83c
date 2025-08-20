// Navigation Bar E2E Tests
import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test('should display logo and brand name', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    await expect(page.getByRole('link', { name: 'MedLock Home' })).toBeVisible();
    await expect(page.getByText('MedLock', { exact: true })).toBeVisible();
  });

  test('should display all main navigation links', async ({ page }) => {
    await page.goto('/');
    const navLinks = [
      { label: 'Records', path: '/records' },
      { label: 'Appointments', path: '/appointments' },
      { label: 'Prescriptions', path: '/prescriptions' },
      { label: 'Messaging', path: '/messages' },
      { label: 'Notifications', path: '/notifications' },
      { label: 'Uploads', path: '/uploads' }
    ];
    for (const { label } of navLinks) {
      await expect(page.getByRole('link', { name: new RegExp(label) })).toBeVisible();
    }
  });

  test('should highlight active nav link', async ({ page }) => {
    await page.goto('/prescriptions');
    const prescriptionsLink = page.getByRole('link', { name: /Prescriptions/ });
    await expect(prescriptionsLink).toHaveAttribute('aria-current', 'page');
    await expect(prescriptionsLink).toHaveClass(/bg-blue-100/);
  });

  test('should navigate to correct pages when nav links are clicked', async ({ page }) => {
    await page.goto('/');
    const navLinks = [
      { label: 'Records', path: '/records' },
      { label: 'Appointments', path: '/appointments' },
      { label: 'Prescriptions', path: '/prescriptions' },
      { label: 'Messaging', path: '/messages' },
      { label: 'Notifications', path: '/notifications' },
      { label: 'Uploads', path: '/uploads' }
    ];
    for (const { label, path } of navLinks) {
      await page.click(`role=link[name="${label}"]`);
      await expect(page).toHaveURL(path);
      // Go back to home for next link
      await page.goto('/');
    }
  });

  test('should display login and sign up links', async ({ page }) => {
    await page.goto('/');
    const loginLink = page.locator('#nav-login');
    const signUpLink = page.locator('#nav-signup');
    await expect(loginLink).toBeVisible();
    await expect(signUpLink).toBeVisible();
    await expect(loginLink).toHaveAttribute('href', '/login');
    await expect(signUpLink).toHaveAttribute('href', '/signup');
  });

  test('should navigate to login and sign up pages via auth links', async ({ page }) => {
    await page.goto('/');
    await page.click('#nav-login');
    await expect(page).toHaveURL('/login');
    await page.goto('/');
    await page.click('#nav-signup');
    await expect(page).toHaveURL('/signup');
  });
});
