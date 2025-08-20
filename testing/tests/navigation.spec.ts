import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test('renders all navigation links and buttons', async ({ page }) => {
    await page.goto('/');
    // Logo and title
    await expect(page.getByRole('img')).toBeVisible();
    await expect(page.getByText('PortalGuard', { exact: true })).toBeVisible();
    // Nav links
    await expect(page.getByRole('link', { name: 'Portal' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    // Nav buttons
    await expect(page.locator('#nav-login-btn')).toBeVisible();
    await expect(page.locator('#nav-sign-up-btn')).toBeVisible();
  });

  test('navigates to correct pages when links/buttons are clicked', async ({ page }) => {
    await page.goto('/');
    // About link
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about/);
    // Back to Home
    await page.getByRole('img').click();
    await expect(page).toHaveURL('/');
    // Portal link
    await page.getByRole('link', { name: 'Portal' }).click();
    await expect(page).toHaveURL(/\/portal/);
    // Contact link
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact/);
    // Login button
    await page.locator('#nav-login-btn').click();
    await expect(page).toHaveURL(/\/login/);
    // Sign Up button
    await page.locator('#nav-sign-up-btn').click();
    await expect(page).toHaveURL(/\/signup/);
  });

  test('active link is highlighted based on route', async ({ page }) => {
    await page.goto('/about');
    const activeAbout = page.getByRole('link', { name: 'About' });
    await expect(activeAbout).toHaveClass(/bg-\[#1d4ed8\]/);
    await expect(activeAbout).toHaveClass(/text-white/);
    // Inactive link
    const inactivePortal = page.getByRole('link', { name: 'Portal' });
    await expect(inactivePortal).not.toHaveClass(/bg-\[#1d4ed8\]/);
  });
});
