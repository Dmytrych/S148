export const ApiRoutes = {
  articleUrl: (slug: string) => `/articles/slug/${slug}`,
  articlesUrl: () => `/articles`,
  productUrl: (productId: string) => `/products/${productId}`,
  productsUrl: () => "/products",
  ordersUrl: () => "/orders",
  homePage: () => "/home-page"
}