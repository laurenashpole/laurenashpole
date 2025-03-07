import { connectToDatabase } from '../utils/mongoose';
import { FONT_OPTIONS } from '../constants/fontOptions';

export default async () => {
  const client = await connectToDatabase();

  const FontSchema = new client.Schema({
    active: Boolean,
    name: {
      type: String,
      required: true
    },
    slug: String,
    description: String,
    tags: [String],
    date_created: String,
    date_modified: String,
    price: Number,
    sale_price: Number,
    distributors: getDistributorsSchema(FONT_OPTIONS.distributors),
    image: String,
    image_horizontal: String,
    image_horizontal_mobile: String,
    image_collection: [],
    image_collection_thumbnails: [],
    image_pinterest: String,
    preview_css: String,
    preview_files: [],
    alternate_style: String,
    commercial_font_file: String,
    personal_font_file: String,
    commercial_file: getOptionsSchema(FONT_OPTIONS.commercial_file),
    personal_file: getOptionsSchema(FONT_OPTIONS.personal_file),
    images: {
      main: String,
      list: String,
      list_mobile: String,
      gallery: [],
      pinterest: String
    },
    font_files: {
      commercial: String,
      personal: String
    },
    previews: {
      font_files: []
    },
    previews_css: String
  });

  try {
    return client.model('Font');
  } catch {
    return client.model('Font', FontSchema);
  }
};

function getOptionsSchema (options) {
  return options.reduce((obj, option) => {
    obj[option.key] = {
      is_included: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: option.label
      }
    };

    return obj;
  }, {});
}

function getDistributorsSchema (options) {
  return options.reduce((obj, option) => {
    obj[option.key] = {
      url: String,
      name: {
        type: String,
        default: option.label
      }
    };

    return obj;
  }, {});
}