/**
 * Page Object đại diện cho trang Danh sách sản phẩm (Inventory Page)
 * Chỉ chứa định nghĩa locator và hành động của trang, không chứa assertion.
 */
export class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Nút thêm sản phẩm Sauce Labs Backpack vào giỏ
    this.addBackpackButton = page.getByTestId('add-to-cart-sauce-labs-backpack');
    // Nút thêm sản phẩm Sauce Labs Bike Light vào giỏ
    this.addBikeLightButton = page.getByTestId('add-to-cart-sauce-labs-bike-light');
    // Badge hiển thị số lượng sản phẩm trên icon giỏ hàng
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    // Icon / Link điều hướng tới trang giỏ hàng
    this.cartLink = page.getByTestId('shopping-cart-link');
  }

  /**
   * Thêm sản phẩm Sauce Labs Backpack vào giỏ hàng
   */
  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  /**
   * Thêm sản phẩm Sauce Labs Bike Light vào giỏ hàng
   */
  async addBikeLightToCart() {
    await this.addBikeLightButton.click();
  }

  /**
   * Chuyển đến trang giỏ hàng
   */
  async goToCart() {
    await this.cartLink.click();
  }
}
