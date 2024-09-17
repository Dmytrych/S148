export const ApiRoutes = {
  loginUrl: () => "/auth/local",
  productUrl: (productId: string) => `/products/${productId}`,
  productsUrl: () => "/products",
  getOrdersUrl: () => "/orders",
  homePage: () => "/home-page"
}