export const ApiRoutes = {
  loginUrl: () => "/auth/local",
  productUrl: (productId: string) => `/products/${productId}`,
  productsUrl: () => "/products",
  ordersUrl: () => "/orders",
  homePage: () => "/home-page"
}