import { defineConfig, devices } from '@playwright/test';

/**
 * Cấu hình Playwright Test cho SauceDemo
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Thời gian chờ tối đa cho mỗi test case */
  timeout: 30 * 1000,
  expect: {
    /* Thời gian chờ tối đa cho mỗi assertion */
    timeout: 5000,
  },
  /* Chạy test song song */
  fullyParallel: true,
  /* Báo cáo kết quả kiểm thử */
  reporter: [['list'], ['html', { open: 'never' }]],
  /* Các thiết lập chung cho toàn bộ test */
  use: {
    /* Base URL dùng cho toàn bộ dự án */
    baseURL: 'https://www.saucedemo.com',

    /* Cấu hình thuộc tính test id trùng với SauceDemo */
    testIdAttribute: 'data-test',

    /* Viewport chuẩn desktop */
    viewport: { width: 1920, height: 1080 },

    /* Tự động chụp screenshot khi test thất bại */
    screenshot: 'only-on-failure',

    /* Thu thập trace khi retry lần đầu */
    trace: 'on-first-retry',
  },

  /* Cấu hình trình duyệt thực thi */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
