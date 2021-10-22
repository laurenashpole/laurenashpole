export function createOrder (data, actions, cart) {
  return actions.order.create({
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: cart.total,
        breakdown: {
          item_total: {
            currency_code: 'USD',
            value: cart.total
          }
        }
      },
      description: '',
      items: cart.items.map((item) => {
        return {
          name: item.name,
          description: `Commercial licensing for ${item.name} font.`,
          unit_amount: {
            currency_code: 'USD',
            value: item.price
          },
          quantity: item.qty,
          sku: item._id
        };
      })
    }]
  });
};

export function approveOrder (data, actions) {
  return actions.order.capture().then((orderData) => {
    console.log(orderData);
  });
}