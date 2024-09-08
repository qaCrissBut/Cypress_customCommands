import { expect } from '@playwright/test';

export class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.signInBtn = page.locator('.hero-descriptor_btn.btn.btn-primary', { hasText: 'Sign up' });
    this.emailInput = page.locator('#signupEmail');
    this.passwordInput = page.locator('#signupPassword');
    this.repeatPasswordInput = page.locator('#signupRepeatPassword');
    this.nameInput = page.locator('#signupName');
    this.errorMessage = (text) => page.locator(`text=${text}`);
  }

  async open() {
    await this.page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
  }

  async clickSignUp() {
    await this.signInBtn.click();
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async fillRepeatPassword(password) {
    await this.repeatPasswordInput.fill(password);
  }

  async fillName(name) {
    await this.nameInput.fill(name);
  }

  async checkErrorMessage(expectedMessage) {
    await expect(this.errorMessage(expectedMessage)).toBeVisible();
  }

  async checkBorderColor(element, expectedColor) {
    const borderColor = await element.evaluate((el) => {
      return window.getComputedStyle(el).borderColor;
    });
    expect(borderColor).toBe(expectedColor);
  }
}
