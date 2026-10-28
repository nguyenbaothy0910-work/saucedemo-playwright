/**
 * Dữ liệu tài khoản người dùng và thông tin checkout phục vụ kiểm thử
 */
export const users = {
  // Tài khoản hợp lệ dùng cho kịch bản mua hàng
  standardUser: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  // Tài khoản bị khóa dùng cho kịch bản đăng nhập thất bại
  lockedOutUser: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
};

export const customerInfo = {
  firstName: 'John',
  lastName: 'Doe',
  postalCode: '70000',
};
