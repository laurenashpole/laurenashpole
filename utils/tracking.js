export function eeImpressions (fonts) {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'ee.impressions',
      ecommerce: {
        impressions: fonts.map((font, i) => parseFont(font, i + 1))
      }
    });
  }
}

export function eeEvent (fonts, position, eventKey, actionField) {
  if (!window.dataLayer) {
    return;
  }

  const dataLayer = {
    event: `ee.${eventKey}`,
    ecommerce: {
      [eventKey]: {
        products: fonts.map((font, i) => parseFont(font, position || i))
      }
    }
  };

  if (actionField) {
    dataLayer.ecommerce[eventKey].actionField = actionField;
  }

  window.dataLayer.push(dataLayer);
}

function parseFont (font, position) {
  const price = font.unit_amount ? font.unit_amount.value || 0 : font.price || 0;

  return {
    name: font.name,
    id: font._id || font.sku,
    price: price.toString(),
    ...(position && { position }),
    ...(font.quantity && { quantity: font.quantity })
  };
}