/**
 * Page Object đại diện cho quy trình Thanh toán (Checkout Page)
 * Bao gồm các bước nhập thông tin, xác nhận và hoàn tất đơn hàng.
 * Chỉ chứa định nghĩa locator và hành động của trang, không chứa assertion.
 */
export class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Bước 1: Thông tin khách hàng
    this.firstNameInput = page.getByTestId('firstName');
    this.lastNameInput = page.getByTestId('lastName');
    this.postalCodeInput = page.getByTestId('postalCode');
    this.continueButton = page.getByTestId('continue');

    // Bước 2: Xác nhận đơn hàng (Overview)
    this.finishButton = page.getByTestId('finish');

    // Bước 3: Hoàn tất đơn hàng (Complete)
    this.completeHeader = page.getByTestId('complete-header');
  }

  /**
   * Nhập thông tin người nhận hàng
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} postalCode
   */
  async fillInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  /**
   * Bấm nút Continue để chuyển sang trang Overview
   */
  async clickContinue() {
    await this.continueButton.click();
  }

  /**
   * Bấm nút Finish để hoàn tất đơn hàng
   */
  async clickFinish() {
    await this.finishButton.click();
  }
}
