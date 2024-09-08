import { test } from '@playwright/test';
import { RegistrationPage } from '/Users/koristuvac/AQA/AQA_advanced/my-node-project/NP_Playwright/NP_Playwright/POM/registrationPage.js';

test.describe('Form Validation', () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.open();
  });

  test('Incorrect email', async () => {
    await registrationPage.clickSignUp();
    await registrationPage.fillEmail('error@email');
    await registrationPage.checkErrorMessage('Email is incorrect');
    await registrationPage.checkBorderColor(registrationPage.emailInput, 'rgb(220, 53, 69)');
  });

  test('Incorrect password', async () => {
    await registrationPage.clickSignUp();
    await registrationPage.fillPassword('qq');
    await registrationPage.checkErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await registrationPage.checkBorderColor(registrationPage.passwordInput, 'rgb(220, 53, 69)');
  });

  test('Empty email field', async () => {
    await registrationPage.clickSignUp();
    await registrationPage.emailInput.focus();
    await registrationPage.emailInput.blur();
    await registrationPage.checkErrorMessage('Email required');
    await registrationPage.checkBorderColor(registrationPage.emailInput, 'rgb(220, 53, 69)');
  });

  test('Empty name field', async () => {
    await registrationPage.clickSignUp();
    await registrationPage.nameInput.focus();
    await registrationPage.nameInput.blur();
    await registrationPage.checkErrorMessage('Name required');
    await registrationPage.checkBorderColor(registrationPage.nameInput, 'rgb(220, 53, 69)');
  });

  test('Password do not match', async () => {
    await registrationPage.clickSignUp();
    await registrationPage.fillPassword('121212Cri$$');
    await registrationPage.fillRepeatPassword('1212Cri$$');
    await registrationPage.checkErrorMessage('Passwords do not match');
    await registrationPage.checkBorderColor(registrationPage.repeatPasswordInput, 'rgb(220, 53, 69)');
  });
});

test('Registration test', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.open();
  await registrationPage.clickSignUp();
  await registrationPage.fillName('Criss');
  await registrationPage.fillEmail('aqa-testcrissbut@gmail.com');
  await registrationPage.fillPassword('121212Cri$$');
  await registrationPage.fillRepeatPassword('121212Cri$$');
  await registrationPage.page.locator('button', { name: 'Register' }).click();
  await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage', { timeout: 20000 });
});
