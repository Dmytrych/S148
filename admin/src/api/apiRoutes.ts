export const ApiRoutes = {
  loginUrl: () => "/auth/local",
  productUrl: (productId: string) => `/products/${productId}`,
  productsUrl: () => "/products",
  getOrdersUrl: () => "/orders",
  homePage: () => "/home-page",
  articleUrl: (slug: string) => `/article/slug/${slug}`,
  articlesUrl: () => `/articles`,
}
