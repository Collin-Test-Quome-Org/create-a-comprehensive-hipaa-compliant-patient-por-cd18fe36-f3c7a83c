// HomePage integration & navigation tests
import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays hero section and main heading', async ({ page }) => {
    // Hero image
    const heroDiv = page.locator('div').filter({ has: page.locator('h1') });
    await expect(heroDiv).toBeVisible();
    // Main section heading
    await expect(page.getByRole('heading', { name: /Everything You Need, In One Portal/i })).toBeVisible();
  });

  test('feature cards are present with correct titles and descriptions', async ({ page }) => {
    const features = [
      {
        title: 'Appointments',
        desc: 'Book, track, and manage visits with your care team. Never miss a checkup.',
        href: '/appointments',
      },
      {
        title: 'Medical Records',
        desc: 'Access your entire medical history securely, whenever you need it.',
        href: '/medical-records',
      },
      {
        title: 'Prescriptions',
        desc: 'View, refill, and track your medications with one click.',
        href: '/prescriptions',
      },
      {
        title: 'Messaging',
        desc: 'Chat instantly with your doctors and support staff in a safe space.',
        href: '/messaging',
      },
    ];
    for (const { title, desc } of features) {
      await expect(page.getByRole('heading', { name: title, level: 3 })).toBeVisible();
      await expect(page.getByText(desc)).toBeVisible();
    }
  });

  test('feature card links navigate to correct routes', async ({ page }) => {
    const cards = [
      { title: 'Appointments', href: '/appointments' },
      { title: 'Medical Records', href: '/medical-records' },
      { title: 'Prescriptions', href: '/prescriptions' },
      { title: 'Messaging', href: '/messaging' },
    ];
    for (const { title, href } of cards) {
      // There may be multiple cards with the same title on the page, so be strict
      const card = page.getByRole('heading', { name: title, level: 3 }).locator('..').locator('..').locator('a');
      await card.click();
      await expect(page).toHaveURL(href);
      await page.goto('/');
    }
  });

  test('main heading uses correct font and color', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /Everything You Need, In One Portal/i });
    // Check color
    const color = await heading.evaluate(el => getComputedStyle(el).color);
    expect(color).toMatch(/29, 78, 216/); // Should be #1d4ed8 (rgb)
    // Check font-weight
    const fontWeight = await heading.evaluate(el => getComputedStyle(el).fontWeight);
    expect(["700", "bold"]).toContain(fontWeight);
    // Check font-family contains Roboto
    const fontFamily = await heading.evaluate(el => getComputedStyle(el).fontFamily);
    expect(fontFamily).toMatch(/Roboto/);
  });

  test('page is accessible (no obvious violations)', async ({ page }) => {
    // Try to tab to a feature card
    await page.keyboard.press('Tab'); // focus first focusable
    let foundCard = false;
    for (let i = 0; i < 10; ++i) {
      const active = await page.evaluate(() => document.activeElement?.tagName);
      if (active === 'A') {
        foundCard = true;
        break;
      }
      await page.keyboard.press('Tab');
    }
    expect(foundCard).toBe(true);
  });
});
