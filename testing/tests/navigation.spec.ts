// navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows MedLock logo and brand', async ({ page }) => {
    const logo = page.locator('nav img');
    await expect(logo).toHaveAttribute('src', '/branding/assets/logo-0.png');
    const brand = page.getByRole('link', { name: 'MedLock Home' });
    await expect(brand).toBeVisible();
    await expect(brand).toContainText('MedLock');
  });

  test('shows primary navigation links', async ({ page }) => {
    const navLabels = [
      'Records',
      'Appointments',
      'Prescriptions',
      'Messaging',
      'Notifications',
      'Uploads',
    ];
    for (const label of navLabels) {
      await expect(page.getByRole('link', { name: new RegExp(label) })).toBeVisible();
    }
  });

  test('shows login and signup links', async ({ page }) => {
    await expect(page.locator('#nav-login')).toBeVisible();
    await expect(page.locator('#nav-signup')).toBeVisible();
  });

  test('active navigation link has highlight', async ({ page }) => {
    // Click on Appointments
    await page.getByRole('link', { name: /Appointments/ }).click();
    await expect(page).toHaveURL('/appointments');
    // The Appointments link should have bg-blue-100 or similar highlight
    const activeLink = page.getByRole('link', { name: /Appointments/ });
    await expect(activeLink).toHaveAttribute('aria-current', 'page');
  });

  test('navigates to Login and Signup pages', async ({ page }) => {
    await page.locator('#nav-login').click();
    await expect(page).toHaveURL('/login');
    await page.goto('/');
    await page.locator('#nav-signup').click();
    await expect(page).toHaveURL('/signup');
  });
});
