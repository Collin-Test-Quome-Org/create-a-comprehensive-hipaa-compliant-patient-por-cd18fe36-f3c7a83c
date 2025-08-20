// routing.spec.ts
import { test, expect } from '@playwright/test';

test.describe('App Routing', () => {
  const routes = [
    { path: '/', expects: /All Your Health Info, One Trusted Portal/ },
    { path: '/login', expects: /login|sign in/i },
    { path: '/signup', expects: /sign up|create account/i },
    { path: '/records', expects: /records|medical/i },
    { path: '/appointments', expects: /appointments/i },
    { path: '/prescriptions', expects: /prescriptions/i },
    { path: '/messages', expects: /messages|chat/i },
    { path: '/notifications', expects: /notifications/i },
    { path: '/uploads', expects: /upload|file/i }
  ];

  for (const route of routes) {
    test(`route ${route.path} renders expected content`, async ({ page }) => {
      await page.goto(route.path);
      await expect(page.locator('body')).toContainText(route.expects);
    });
  }
});
