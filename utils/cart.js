export function addItem (item) {
  const items = getCart().items || [];
  const itemIdx = items.map((i) => i._id).indexOf(item._id);
  itemIdx === -1 ? items.push({...item, qty: 1}) : items[itemIdx].qty = items[itemIdx].qty + 1;
  window.localStorage.setItem('cart', JSON.stringify({ items, ...getDetails(items) }));
  dispatchEvent();
}

export function removeItem (item, qty) {
  if (item.qty === qty) {
    const items = (getCart().items || []).filter((i) => i._id !== item._id);
    window.localStorage.setItem('cart', JSON.stringify({ items, ...getDetails(items) }));
    return dispatchEvent();
  }

  const items = getCart().items || [];
  const itemIdx = items.map((i) => i._id).indexOf(item._id);
  items[itemIdx].qty = items[itemIdx].qty - 1;
  window.localStorage.setItem('cart', JSON.stringify({ items, ...getDetails(items) }));
  dispatchEvent();
}

export function getCart () {
  return JSON.parse(window.localStorage.getItem('cart') || '{}');
}

export function clearCart () {
  window.localStorage.removeItem('cart');
  dispatchEvent();
}

function getDetails (items) {
  return items.reduce((obj, item) => {
    obj.count = obj.count + item.qty;
    obj.total = obj.total + item.price * item.qty;
    return obj;
  }, { count: 0, total: 0 });
}

function dispatchEvent () {
  const event = new Event('updateCart');
  document.dispatchEvent(event);
}