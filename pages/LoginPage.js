/**
 * Page Object đại diện cho trang Đăng nhập (Login Page)
 * Chỉ chứa định nghĩa locator và hành động của trang, không chứa assertion.
 */
export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Các locator sử dụng getByTestId tương ứng data-test trên SauceDemo
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
    this.errorMessage = page.getByTestId('error');
  }

  /**
   * Điều hướng đến trang đăng nhập (dựa trên baseURL)
   */
  async goto() {
    await this.page.goto('/');
  }

  /**
   * Nhập tài khoản, mật khẩu và bấm nút Login
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
