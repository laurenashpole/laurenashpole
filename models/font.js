import { connectToDatabase } from '../utils/mongoose';
import { FONT_OPTIONS } from '../constants/fontOptions';

export default async () => {
  const client = await connectToDatabase();

  const FontSchema = new client.Schema({
    name: {
      type: String,
      required: true
    },
    slug: String,
    description: String,
    tags: [],
    date_created: String,
    date_modified: String,
    price: Number,
    image: String,
    image_collection: [],
    image_collection_thumbnails: [],
    css_file: String,
    preview_css: String,
    preview_files: [],
    alternate_style: String,
    commercial_font_file: String,
    personal_font_file: String,
    commercial_file: getOptionsSchema(FONT_OPTIONS.commercial_file),
    personal_file: getOptionsSchema(FONT_OPTIONS.personal_file)
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