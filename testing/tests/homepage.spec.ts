import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {
  test('renders hero, why section, and feature cards', async ({ page }) => {
    await page.goto('/');
    // Hero section background image is present
    // (We can't check background image easily, but check Hero present via heading)
    await expect(page.locator('main')).toBeVisible();
    // Why MedLock heading
    await expect(page.getByRole('heading', { name: /Why MedLock/i, level: 2 })).toBeVisible();
    // Why MedLock text
    await expect(page.getByText(/Designed for health-conscious go-getters/i)).toBeVisible();
    // Features
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
    for (const { title, description } of features) {
      await expect(page.getByRole('heading', { name: title, level: 3 }).first()).toBeVisible();
      await expect(page.getByText(description)).toBeVisible();
    }
  });

  test('feature cards have correct layout on desktop and mobile', async ({ page }) => {
    await page.goto('/');
    // Desktop: 3 columns
    await page.setViewportSize({ width: 1200, height: 800 });
    const featureCards = page.locator('.grid.grid-cols-1.md\:grid-cols-3 .shadow-lg');
    await expect(featureCards).toHaveCount(5);
    // Mobile: 1 column
    await page.setViewportSize({ width: 375, height: 800 });
    // The grid should still render all features, stacked
    await expect(featureCards).toHaveCount(5);
  });
});
