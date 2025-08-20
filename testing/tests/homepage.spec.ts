// homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section and heading', async ({ page }) => {
    // Hero is always present at top
    await expect(page.locator('main')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Why MedLock?' })).toBeVisible();
    await expect(page.getByText('Designed for health-conscious go-getters who demand privacy, clarity, and convenience.')).toBeVisible();
  });

  test('displays all features cards', async ({ page }) => {
    const features = [
      {
        title: 'Military-Grade Security',
        description: 'Your data is locked down tighter than a submarine hatch. Only you and your care team have the keys.'
      },
      {
        title: 'Effortless Appointments',
        description: 'Book, track, and manage visits in a snap—no more phone tag, just tap and go.'
      },
      {
        title: 'All Your Records, One Place',
        description: 'Access your complete history, test results, and physician notes, securely organized for you.'
      },
      {
        title: 'Prescription Power',
        description: 'See, refill, and manage your prescriptions. We keep your meds on track—so you don’t have to.'
      },
      {
        title: 'Direct Messaging',
        description: 'Connect instantly with your care team. No faxes, no waiting—just answers.'
      }
    ];
    for (const feature of features) {
      await expect(page.getByRole('heading', { name: feature.title })).toBeVisible();
      await expect(page.getByText(feature.description)).toBeVisible();
    }
  });

  test('background color and layout classes are applied', async ({ page }) => {
    // Check for bg-slate-50 and grid layout
    const main = page.locator('main.container.mx-auto');
    await expect(main).toHaveClass(/container/);
    const grid = main.locator('div.grid');
    await expect(grid).toBeVisible();
    await expect(grid).toHaveClass(/grid-cols-1/);
  });

  test('is accessible and main landmarks exist', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
  });
});
