// homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section and heading', async ({ page }) => {
    // The Hero component background image
    const heroBg = page.locator('div[style*="/branding/assets/hero-0.png"]');
    await expect(heroBg).toBeVisible();
    // Main heading
    await expect(page.getByRole('heading', { name: /Medivault: Healthcare in Your Hands/i })).toBeVisible();
  });

  test('renders all feature cards with correct titles and descriptions', async ({ page }) => {
    const features = [
      {
        title: 'Effortless Appointments',
        desc: 'Book, track, and manage appointments with a tap. Stay in sync—no more missed visits.',
        to: '/appointments',
      },
      {
        title: 'Medical Records',
        desc: 'Access your health history anywhere. Secure, searchable, and always at your fingertips.',
        to: '/medical-records',
      },
      {
        title: 'Prescriptions Portal',
        desc: 'Manage scripts, request refills, and receive timely reminders with total confidence.',
        to: '/prescriptions',
      },
      {
        title: 'Care Team Messaging',
        desc: 'Direct chat with your healthcare team. Your questions answered, your privacy protected.',
        to: '/messaging',
      },
      {
        title: 'File Vault',
        desc: 'Upload and store important documents. Everything in one place—secure and organized.',
        to: '/file-uploads',
      },
    ];
    for (const feature of features) {
      await expect(page.getByRole('heading', { name: feature.title })).toBeVisible();
      await expect(page.getByText(feature.desc)).toBeVisible();
      // The card is a link to the right page
      const cardLink = page.getByRole('link', { name: new RegExp(feature.title) });
      await expect(cardLink).toHaveAttribute('href', feature.to);
    }
  });

  test('feature cards navigate to intended routes', async ({ page }) => {
    await page.getByRole('link', { name: /Effortless Appointments/ }).click();
    await expect(page).toHaveURL(/\/appointments$/);
    await page.goto('/');
    // Note: HomePage uses /medical-records but navigation bar uses /records
    // Clicking "Medical Records" card should navigate to /medical-records
    await page.getByRole('link', { name: /Medical Records/ }).click();
    await expect(page).toHaveURL(/\/medical-records$/);
    await page.goto('/');
    await page.getByRole('link', { name: /Prescriptions Portal/ }).click();
    await expect(page).toHaveURL(/\/prescriptions$/);
    await page.goto('/');
    await page.getByRole('link', { name: /Care Team Messaging/ }).click();
    await expect(page).toHaveURL(/\/messaging$/);
    await page.goto('/');
    await page.getByRole('link', { name: /File Vault/ }).click();
    await expect(page).toHaveURL(/\/file-uploads$/);
  });

  test('basic accessibility: headings and links', async ({ page }) => {
    // Main heading
    await expect(page.getByRole('heading', { name: /Medivault: Healthcare in Your Hands/i })).toBeVisible();
    // All feature cards are links
    for (const cardTitle of [
      'Effortless Appointments',
      'Medical Records',
      'Prescriptions Portal',
      'Care Team Messaging',
      'File Vault',
    ]) {
      await expect(page.getByRole('link', { name: new RegExp(cardTitle) })).toBeVisible();
    }
  });
});
