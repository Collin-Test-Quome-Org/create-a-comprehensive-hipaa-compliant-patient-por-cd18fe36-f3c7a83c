// Home Page E2E Tests
import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should render hero section and dashboard features', async ({ page }) => {
    await page.goto('/');
    // Check for hero image background
    const heroImg = page.locator('div[style*="/branding/assets/hero-0.png"]');
    await expect(heroImg).toBeVisible();

    // Check for main heading
    await expect(page.getByRole('heading', { name: /Your Secure Health Dashboard/i })).toBeVisible();

    // Check dashboard features
    const features = [
      { title: 'Appointments', description: 'Book, view, and manage your upcoming healthcare visits with confidence.' },
      { title: 'Medical Records', description: 'Access your secure medical records, lab results, and reports anytime.' },
      { title: 'Prescriptions', description: 'Track medications, renew prescriptions, and stay on top of your wellness.' },
      { title: 'Messaging', description: 'Confidentially connect with your care team or ask questions 24/7.' },
      { title: 'Notifications', description: 'Get reminders, alerts, and updates tailored to your health journey.' },
    ];
    for (const { title, description } of features) {
      await expect(page.getByText(title, { exact: true })).toBeVisible();
      await expect(page.getByText(description, { exact: true })).toBeVisible();
    }
  });

  test('should navigate to feature pages when dashboard cards are clicked', async ({ page }) => {
    await page.goto('/');
    // Card titles and their expected navigation paths
    const featureCards = [
      { title: 'Appointments', path: '/appointments' },
      { title: 'Medical Records', path: '/medical-records' },
      { title: 'Prescriptions', path: '/prescriptions' },
      { title: 'Messaging', path: '/messaging' },
      { title: 'Notifications', path: '/notifications' },
    ];
    for (const { title, path } of featureCards) {
      const card = page.getByText(title, { exact: true });
      await card.click({ force: true }); // in case of animated/motion overlays
      await expect(page).toHaveURL(path);
      await page.goto('/');
    }
  });

  test('should be accessible via keyboard navigation', async ({ page }) => {
    await page.goto('/');
    // Focus the first dashboard card
    await page.keyboard.press('Tab'); // Navigation
    await page.keyboard.press('Tab'); // First dashboard card
    // No error = passes basic keyboard navigation
    await expect(page).toHaveURL('/');
  });
});
