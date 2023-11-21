// @ts-expect-error
export async function create (deliveryTypeName, orderData) {
  console.log('Order created')
  console.log({ deliveryTypeName, orderData })

  return await Promise.resolve({
    isValid: true,
    processResults: [
      {
        code: 'guid',
        resultData: null
      }
    ],
    result: {
      totalPrice: 1000,
      orderId: 228
    }
  })
}
