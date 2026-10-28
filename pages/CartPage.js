/**
 * Page Object đại diện cho trang Giỏ hàng (Cart Page)
 * Chỉ chứa định nghĩa locator và hành động của trang, không chứa assertion.
 */
export class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Danh sách các item trong giỏ hàng
    this.cartItems = page.getByTestId('inventory-item');
    // Nút chuyển sang bước Checkout
    this.checkoutButton = page.getByTestId('checkout');
  }

  /**
   * Bấm nút Checkout để tiến hành thanh toán
   */
  async clickCheckout() {
    await this.checkoutButton.click();
  }
}
