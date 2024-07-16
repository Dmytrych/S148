export function getProductRoute(productCode: string) {
  return `/products/${productCode.toString()}`;
}