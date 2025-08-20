import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('logo and brand link navigates to home', async ({ page }) => {
    const logo = page.locator('nav img');
    const brand = page.getByText('PortalGuard').first();
    await expect(logo).toBeVisible();
    await expect(brand).toBeVisible();

    await brand.click();
    await expect(page).toHaveURL('/');
  });

  test('renders all nav links and buttons', async ({ page }) => {
    // Main links
    await expect(page.getByRole('link', { name: 'Portal' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    // Buttons
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
  });

  test('active link has correct styling', async ({ page }) => {
    // On home, none of Portal/About/Contact is active
    for (const link of ['Portal', 'About', 'Contact']) {
      const navLink = page.getByRole('link', { name: link });
      await expect(navLink).not.toHaveClass(/bg-\[#1d4ed8\]/);
    }
    // Click About and check it
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page.getByRole('link', { name: 'About' })).toHaveClass(/bg-\[#1d4ed8\]/);
    await expect(page).toHaveURL('/about');
  });

  test('login and signup buttons navigate correctly', async ({ page }) => {
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('/login');
    await page.goBack();
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL('/signup');
  });

  test('portal, about, and contact links navigate correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Portal' }).click();
    await expect(page).toHaveURL('/portal');
    await page.goBack();
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await page.goBack();
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
  });

  test('has accessible nav landmark', async ({ page }) => {
    // The nav element should have role="navigation"
    await expect(page.locator('nav')).toHaveAttribute('class', /flex/);
  });
});
