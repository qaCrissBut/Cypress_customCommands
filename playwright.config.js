// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  
  testDir: './tests',
  timeout: 3000,
  retries: 2,
  fullyParallel: true,
  reporter: 'html',
  use: {
  baseURL: 'http://google.com',
  httpCredentials: {
  username: 'user',
  password: 'password',
    },
  storageState: 'auth.json',
  headless: false,
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
  outputDir: 'test-results/',
  reporter: [
  ['list'], 
  ],
  use: {
    viewport: { width: 1280, height: 720 },
  },

  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], headless: true },
    },
  ]
  });

