import { test, expect } from '@playwright/test';

test.describe('HomePage Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section with welcome message and CTAs', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Welcome to SecureMed Portal' })).toBeVisible();
    await expect(page.getByText('Empowering you to access, manage, and share your health data with confidence. Trust, safety, and seamless care for every step of your journey.')).toBeVisible();
    // Hero background image
    await expect(page.locator('div.bg-cover')).toHaveCSS('background-image', /hero-0.png/);
    // Logo in hero
    await expect(page.locator('img[src="/branding/assets/logo-0.png"]')).toBeVisible();
    // CTAs
    await expect(page.locator('#cta-signup')).toBeVisible();
    await expect(page.locator('#cta-login')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '/signup');
    await expect(page.getByRole('link', { name: 'Sign In' })).toHaveAttribute('href', '/login');
  });

  test('CTA buttons navigate to signup and login', async ({ page }) => {
    await page.locator('#cta-signup').click();
    await expect(page).toHaveURL(/\/signup$/);
    await page.goto('/');
    await page.locator('#cta-login').click();
    await expect(page).toHaveURL(/\/login$/);
  });

  test('shows main section with subtitle', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'All Your Care, One Portal' })).toBeVisible();
    await expect(page.getByText('SecureMed Portal is your digital front door to healthcare: view medical records, manage appointments, chat with providers, and handle prescriptions—all in a single, secure place.')).toBeVisible();
  });

  test('shows four feature cards with correct content and links', async ({ page }) => {
    const features = [
      { title: 'Appointments', link: '/appointments', desc: 'Book, view, or manage your upcoming visits with ease.' },
      { title: 'Records', link: '/medical-records', desc: 'Access your personal health records securely and instantly.' },
      { title: 'Prescriptions', link: '/prescriptions', desc: 'View prescriptions, request refills, and track medication.' },
      { title: 'Messaging', link: '/messaging', desc: 'Message your care team for timely answers and support.' }
    ];
    for (const feature of features) {
      await expect(page.getByRole('heading', { name: feature.title })).toBeVisible();
      await expect(page.getByText(feature.desc)).toBeVisible();
      // Feature link
      const linkId = `feature-${feature.title.toLowerCase()}-link`;
      await expect(page.locator(`#${linkId}`)).toBeVisible();
      await expect(page.locator(`#${linkId}`).getByRole('link')).toHaveAttribute('href', feature.link);
    }
  });

  test('feature card links navigate to correct pages', async ({ page }) => {
    // Appointments
    await page.locator('#feature-appointments-link').getByRole('link').click();
    await expect(page).toHaveURL(/\/appointments$/);
    await page.goto('/');
    // Records
    await page.locator('#feature-records-link').getByRole('link').click();
    await expect(page).toHaveURL(/medical-records/);
    await page.goto('/');
    // Prescriptions
    await page.locator('#feature-prescriptions-link').getByRole('link').click();
    await expect(page).toHaveURL(/\/prescriptions$/);
    await page.goto('/');
    // Messaging
    await page.locator('#feature-messaging-link').getByRole('link').click();
    await expect(page).toHaveURL(/\/messaging$/);
  });

  test('accessibility: main headings and buttons are focusable', async ({ page }) => {
    await page.keyboard.press('Tab'); // Nav
    await page.keyboard.press('Tab'); // Next nav item
    // Tab to main content
    while (!(await page.evaluate(() => document.activeElement && document.activeElement.id === 'cta-signup'))) {
      await page.keyboard.press('Tab');
    }
    await expect(page.locator('#cta-signup')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#cta-login')).toBeFocused();
  });
});
