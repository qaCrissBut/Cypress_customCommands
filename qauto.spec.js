import { test, expect } from '@playwright/test';

test.describe('Form Validation', () => {

  test('Authorization', async ({ page }) => {
    await page.goto('https://guest:welcom2qauto@qauto.forstudy.space/');
    await page.waitForTimeout(10000);
  });

  test('Incorrect email', async ({ page }) => {
    await page.goto('https://guest:welcom2qauto@qauto.forstudy.space/');
    const signInBtn = page.locator('.hero-descriptor_btn.btn.btn-primary', { hasText: 'Sign up' });
    await signInBtn.click();

    const emailInput = page.locator('#signupEmail'); 
    await emailInput.fill('error@email');
    await emailInput.blur();

    const errorMessage = page.locator('text=Email is incorrect');
    await expect(errorMessage).toBeVisible();

    await page.waitForTimeout(1000);
  
    const borderColor = await emailInput.evaluate((el) => {
      return window.getComputedStyle(el).borderColor;
    });

    expect(borderColor).toBe('rgb(220, 53, 69)');
  });

  test('Incorrect password', async ({ page }) => {
    await page.goto('https://guest:welcom2qauto@qauto.forstudy.space/');
    const signInBtn = page.locator('.hero-descriptor_btn.btn.btn-primary');
    await signInBtn.click();

    const passwordInput = page.locator('#signupPassword'); 
    await passwordInput.fill('qq');
    await passwordInput.blur();

    const errorMessage = page.locator('text=Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await expect(errorMessage).toBeVisible();

    await page.waitForTimeout(1000);
  
    const borderColor = await passwordInput.evaluate((el) => {
      return window.getComputedStyle(el).borderColor;
    });

    expect(borderColor).toBe('rgb(220, 53, 69)');
  });

  test('Empty email field', async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    const signInBtn = page.locator('.hero-descriptor_btn.btn.btn-primary');
    await signInBtn.click();

    const emailInput = page.locator('#signupEmail'); 
    await emailInput.focus();
    await emailInput.blur();

    const errorMessage = page.locator('text=Email required');
    await expect(errorMessage).toBeVisible();

    await page.waitForTimeout(1000);
  
    const borderColor = await emailInput.evaluate((el) => {
      return window.getComputedStyle(el).borderColor;
    });

    expect(borderColor).toBe('rgb(220, 53, 69)');
  });

  test('Empty name field', async ({ page }) => {
    await page.goto('https://guest:welcom2qauto@qauto.forstudy.space/');
    const signInBtn = page.locator('.hero-descriptor_btn.btn.btn-primary');
    await signInBtn.click();

    const nameInput = page.locator('#signupName'); 
    await nameInput.focus();
    await nameInput.blur();

    const errorMessage = page.locator('text=Name required');
    await expect(errorMessage).toBeVisible();

    await page.waitForTimeout(1000);
  
    const borderColor = await nameInput.evaluate((el) => {
      return window.getComputedStyle(el).borderColor;
    });

    expect(borderColor).toBe('rgb(220, 53, 69)');
  });

  test('Password do not match', async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    const signInBtn = page.locator('.hero-descriptor_btn.btn.btn-primary');
    await signInBtn.click();

    const passwordInput = page.locator('#signupPassword'); 
    const repeatPasswordInput = page.locator('#signupRepeatPassword'); 

    await passwordInput.fill('121212Cri$$');
    await repeatPasswordInput.fill('1212Cri$$');
    await repeatPasswordInput.blur();

    const errorMessage = page.locator('text=Passwords do not match');
    await expect(errorMessage).toBeVisible();

    await page.waitForTimeout(1000);
  
    const borderColor = await repeatPasswordInput.evaluate((el) => {
      return window.getComputedStyle(el).borderColor;
    });

    expect(borderColor).toBe('rgb(220, 53, 69)');
  });

});

test('Registration test', async ({ page }) => {
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Criss');
  await page.locator('#signupLastName').fill('But');
  await page.getByLabel('Name').fill('aqa-testcrissbut@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('121212Cri$$');
  await page.getByLabel('Re-enter password').fill('121212Cri$$');
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage', { timeout: 20000 });

});
  










