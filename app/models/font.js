const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FontSchema = new Schema({
  name: String,
  slug: String,
  description: String,
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
  commercial_file: {
    ttf: {
      is_included: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'TrueType Font'
      }
    },
    otf: {
      is_included: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'OpenType Font'
      }
    },
    webfont: {
      is_included: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'Web Font Kit'
      }
    },
    additional_chars: {
      is_included: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'Additional Characters (Latin-1)'
      }
    }
  },
  personal_file: {
    ttf: {
      is_included: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'TrueType Font'
      }
    },
    otf: {
      is_included: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'OpenType Font'
      }
    }
  },
  personal_font_file: String,
  commercial_font_file: String,
  tags: []
});

FontSchema.pre('save', function (next) {
  this.slug = this.generateSlug(this.name);
  next();
});

FontSchema.methods.generateSlug = function (name) {
  return name.replace(/&|'/g, '').replace(/\s+/g, '-').toLowerCase();
};

module.exports = mongoose.model('Font', FontSchema);