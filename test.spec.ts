import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('test', async ({ page }) => {
  await page.goto('https://atmnb.tsukuba.ac.jp/attend/tsukuba');
  await page.getByRole('textbox', { name: 'Input 9-digit number' }).fill(process.env.CODE);
  await page.getByRole('button', { name: 'GO' }).click();
  //await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill(process.env.ITF_USER_ID);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ITF_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForNavigation();;
});
