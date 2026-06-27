import { expect, test } from '@playwright/test';

test('ページタイトルを検証できる', async ({ page }) => {
  await page.setContent('<title>OK</title><h1>Hello</h1>');
  await expect(page).toHaveTitle('OK');
  await expect(page.locator('h1')).toHaveText('Hello');
});
