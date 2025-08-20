// navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays logo and brand name', async ({ page }) => {
    const logo = page.locator('img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    await expect(page.getByRole('link', { name: /MedLock Home/i })).toBeVisible();
    await expect(page.getByText('MedLock', { exact: true })).toBeVisible();
  });

  test('renders all main navigation links', async ({ page }) => {
    const navLinks = ['Records', 'Appointments', 'Prescriptions', 'Messaging', 'Notifications', 'Uploads'];
    for (const link of navLinks) {
      await expect(page.getByRole('link', { name: new RegExp(link, 'i') })).toBeVisible();
    }
  });

  test('renders authentication links', async ({ page }) => {
    await expect(page.locator('#nav-login')).toBeVisible();
    await expect(page.locator('#nav-signup')).toBeVisible();
    await expect(page.getByRole('link', { name: /Login/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Sign Up/i })).toBeVisible();
  });

  test('highlights current page in navigation', async ({ page }) => {
    // Home (brand link) is not highlighted for other pages
    await page.goto('/appointments');
    const appointmentsLink = page.getByRole('link', { name: /Appointments/i });
    await expect(appointmentsLink).toHaveAttribute('aria-current', 'page');
    await expect(appointmentsLink).toHaveClass(/bg-blue-100/);
  });

  test('navigates to correct pages when nav links are clicked', async ({ page }) => {
    // Appointments
    await page.getByRole('link', { name: /Appointments/i }).click();
    await expect(page).toHaveURL(/\/appointments$/);
    // Prescriptions
    await page.getByRole('link', { name: /Prescriptions/i }).click();
    await expect(page).toHaveURL(/\/prescriptions$/);
    // Records
    await page.getByRole('link', { name: /Records/i }).click();
    await expect(page).toHaveURL(/\/records$/);
    // Messaging
    await page.getByRole('link', { name: /Messaging/i }).click();
    await expect(page).toHaveURL(/\/messages$/);
    // Notifications
    await page.getByRole('link', { name: /Notifications/i }).click();
    await expect(page).toHaveURL(/\/notifications$/);
    // Uploads
    await page.getByRole('link', { name: /Uploads/i }).click();
    await expect(page).toHaveURL(/\/uploads$/);
  });

  test('navigates to login and signup', async ({ page }) => {
    await page.locator('#nav-login').click();
    await expect(page).toHaveURL(/\/login$/);
    await page.goto('/');
    await page.locator('#nav-signup').click();
    await expect(page).toHaveURL(/\/signup$/);
  });
});
