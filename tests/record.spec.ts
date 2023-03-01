import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  console.log("URL clicked")
  await page.hover("(//li[contains(@class,'nav-item dropdown')])[3]");
  await page.hover("//span[text()[normalize-space()='My account']]");
  console.log("hovered");
  
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('saivenkat1619@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Venkat@1619');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Venkat');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});