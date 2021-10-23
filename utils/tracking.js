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

export function eeEvent (fonts, position, eventName, eventKey, actionField) {
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

  if (eventName) {
    dataLayer.event = eventName;
  }

  if (actionField) {
    dataLayer.ecommerce[eventKey].actionField = actionField;
  }

  window.dataLayer.push(dataLayer);
}

function parseFont (font, position) {
  const parsedFont = {
    name: font.name,
    id: font._id,
    price: font.price ? font.price.toString() : '0'
  };

  if (position) {
    parsedFont.position = position;
  }

  return parsedFont;
}