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
  return {
    name: font.name,
    id: font._id,
    price: font.price ? font.price.toString() : '0',
    ...(position && { position }),
    ...(font.quantity && { quantity: font.quantity })
  };
}