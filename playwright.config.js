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
    viewport: { width: 1280, height: 720 },
  },
  reporter: [
    ['list'], 
  ],

  /* Configure projects for major browsers */
  projects: [
    
    {
      name: 'qauto',
      testMatch: '**.qauto.spec.js',
      use: {
        headless: false,
        baseURL: process.env.BASE_URL,
        httpCredentials: {
          username: process.env.HTTP_CREDENTIALS_USERNAME,
          password: process.env.HTTP_CREDENTIALS_PASSWORD,
        }
      }
    }, 

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