import { expect, test } from '@playwright/test';

test('should start page', async ({ page }) => {
  await page.goto('https://www.google.com/');

  expect(true).toBeTruthy();

  await expect(await page.screenshot()).toMatchSnapshot('main-page.png');
});
