import { fetchFrom, GET } from './apiRequestUtils';

// const useMocks = process.env.USE_MOCKS;

const controllerName = 'ProductsRestApi';
const getAllActionName = 'GetAll';
const getActionName = 'Get';

export async function getAllProducts() {
  return fetchFrom(`/${controllerName}/${getAllActionName}`, GET);
}

export async function getAllProductsFiltered(productIds) {
  const productQuery = productIds.reduce(
    (accumulator, productId) => `${accumulator}&${getFilterQueryElement(productId)}`,
    getFilterQueryElement(productIds[0]),
  );
  return fetchFrom(
    `/${controllerName}/${getAllActionName}?${productQuery}`,
    GET,
  );
}

export async function getProductById(productId) {
  return fetchFrom(
    `/${controllerName}/${getActionName}?id=${productId}`,
    GET,
  );
}

function getFilterQueryElement(id) {
  return `IdFilter.Filter=${id}`;
}
