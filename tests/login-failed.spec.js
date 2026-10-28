import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { users } from '../test-data/users.js';

test.describe('Kịch bản 1: Đăng nhập thất bại', () => {
  test('Kiểm tra thông báo lỗi khi đăng nhập với tài khoản bị khóa', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Mở trang đăng nhập SauceDemo
    await loginPage.goto();

    // 2. Nhập username tài khoản bị khóa và password, sau đó bấm Login
    await loginPage.login(users.lockedOutUser.username, users.lockedOutUser.password);

    // 3. Kiểm tra thông báo lỗi hiển thị đúng nội dung tài khoản bị khóa
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      'Epic sadface: Sorry, this user has been locked out.'
    );

    // 4. Kiểm tra người dùng vẫn ở trang đăng nhập (URL không chuyển sang /inventory.html)
    await expect(page).not.toHaveURL(/.*inventory\.html/);
    await expect(page).toHaveURL(/.*saucedemo\.com\/?$/);
  });
});
