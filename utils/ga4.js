export function ga4Event (event, items, listName, customFields = {}) {
  if (window.dataLayer) {
    const list = listName ? {
      item_list_id: listName.toLowerCase().replace(/ /g, '_'),
      item_list_name: listName
    } : {};

    window.dataLayer.push({
      event: event,
      ecommerce: {
        ...list,
        items: items.map((item) => parseItem(item, list)),
        ...(customFields.value && { currency: 'USD' }),
        ...customFields
      }
    });

    console.log({
      event: event,
      ecommerce: {
        ...list,
        items: items.map((item) => parseItem(item, list)),
        ...(customFields.value && { currency: 'USD' }),
        ...customFields
      }
    });
  }
}

function parseItem (item, list) {
  const price = item.unit_amount ? item.unit_amount.value || 0 : item.price || 0;

  return {
    item_id: item._id || item.sku,
    item_name: item.name,
    index: 0,
    ...list,
    price: price,
    ...(item.qty && { quantity: item.qty })
  }
};