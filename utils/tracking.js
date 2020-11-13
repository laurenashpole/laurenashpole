export function eeImpressions (fonts) {
  if (window.dataLayer) {
    window.dataLayer.push({
      ecommerce: {
        impressions: fonts.map((font, i) => parseFont(font, i + 1))
      }
    });
  }
}

export function eeEvent (font, position, eventName, eventKey, actionField) {
  if (!window.dataLayer) {
    return;
  }

  const dataLayer = {
    ecommerce: {
      [eventKey]: {
        products: [parseFont(font, position)]
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