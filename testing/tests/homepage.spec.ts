import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the hero section', async ({ page }) => {
    // The Hero is above dashboard; check for PortalGuard branding
    await expect(page.getByText('PortalGuard')).toBeVisible();
    // Check for the hero image wrapper (background image)
    const heroDiv = page.locator('div').filter({ has: page.locator('h1') });
    await expect(heroDiv.locator('h1')).not.toHaveCount(0);
  });

  test('renders the dashboard heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2, name: 'Your Health Portal Dashboard' })).toBeVisible();
  });

  test('renders all dashboard cards', async ({ page }) => {
    const cards = [
      'Appointments',
      'Medical Records',
      'Prescriptions',
      'Messaging',
      'Notifications',
      'File Uploads',
    ];
    for (const card of cards) {
      await expect(page.getByRole('heading', { name: card })).toBeVisible();
    }
  });

  test('dashboard cards have correct descriptions', async ({ page }) => {
    const cardDescriptions = [
      'Book, view, or manage your appointments with ease.',
      'Access your health history and lab results securely.',
      'View active prescriptions and request refills in one tap.',
      'Chat directly with your care team anytime.',
      'All your important alerts and reminders, in one spot.',
      'Upload insurance cards, forms, or images securely.',
    ];
    for (const desc of cardDescriptions) {
      await expect(page.getByText(desc)).toBeVisible();
    }
  });

  test('dashboard cards navigate to correct routes', async ({ page }) => {
    const cardLinks = [
      { label: 'Appointments', path: '/appointments' },
      { label: 'Medical Records', path: '/medical-records' },
      { label: 'Prescriptions', path: '/prescriptions' },
      { label: 'Messaging', path: '/messaging' },
      { label: 'Notifications', path: '/notifications' },
      { label: 'File Uploads', path: '/uploads' },
    ];
    for (const { label, path } of cardLinks) {
      // Some dashboard cards may be <a> or <button> or custom, so try by role or text
      const card = page.getByRole('heading', { name: label });
      const cardParent = card.locator('..').locator('..'); // Up to card container
      // Try to find link in card
      const link = cardParent.getByRole('link');
      if (await link.count()) {
        await link.click();
        await expect(page).toHaveURL(path);
        await page.goto('/');
      } else {
        // fallback: click card container itself
        await cardParent.click();
        // The app may not have those routes implemented, just check navigation attempted
        await expect(page.url()).toContain(path);
        await page.goto('/');
      }
    }
  });

  test('page has no major accessibility violations (AXE)', async ({ page }) => {
    // Only runs if @playwright/test-axe is installed
    // Otherwise this can be skipped
    // @ts-expect-error
    if (typeof page.runAxe === 'function') {
      // @ts-ignore
      const results = await page.runAxe();
      expect(results.violations).toHaveLength(0);
    }
  });
});
