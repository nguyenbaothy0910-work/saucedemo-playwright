import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { users, customerInfo } from '../test-data/users.js';

test.describe('Kịch bản 2: Thêm giỏ hàng và thanh toán', () => {
  test('Thêm 2 sản phẩm vào giỏ hàng và hoàn tất đặt hàng thành công', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 1. Mở trang đăng nhập và đăng nhập bằng standard_user
    await loginPage.goto();
    await loginPage.login(users.standardUser.username, users.standardUser.password);

    // 2. Thêm 2 sản phẩm: Sauce Labs Backpack và Sauce Labs Bike Light
    await inventoryPage.addBackpackToCart();
    await inventoryPage.addBikeLightToCart();

    // 3. Kiểm tra biểu tượng giỏ hàng hiển thị số 2
    await expect(inventoryPage.cartBadge).toHaveText('2');

    // 4. Vào giỏ hàng, kiểm tra có đúng 2 sản phẩm, bấm Checkout
    await inventoryPage.goToCart();
    await expect(cartPage.cartItems).toHaveCount(2);
    await cartPage.clickCheckout();

    // 5. Điền thông tin: First Name, Last Name, Postal Code (dùng dữ liệu mẫu)
    await checkoutPage.fillInformation(
      customerInfo.firstName,
      customerInfo.lastName,
      customerInfo.postalCode
    );

    // 6. Bấm Continue, sau đó bấm Finish
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();

    // 7. Kiểm tra thông báo đặt hàng thành công: "Thank you for your order!"
    await expect(checkoutPage.completeHeader).toBeVisible();
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });
});
