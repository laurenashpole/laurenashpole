var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FontSchema = new Schema({
    name: String,
    slug: String,
    description: String,
    date_created: String,
    date_modified: String,
    price: Number,
    image: String,
    image_retina: String,
    image_mobile: String,
    image_mobile_retina: String,
    image_main: String,
    image_main_retina: String,
    image_thumbnail: String,
    image_thumbnail_retina: String,
    image_collection: [],
    color: String,
    css_file: String,
    alternate_style: String,
    personal_use_details: [],
    commercial_use_details: [],
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
    one_download_option: Boolean
});

FontSchema.pre('save', function (next) {

    this.slug = this.generateSlug(this.name);
    this.one_download_option = this.checkDownloadOptions(this);

    next();

});

FontSchema.methods.generateSlug = function (name) {
    return name.replace(/&|'/g, '').replace(/\s+/g, '-').toLowerCase();
};

FontSchema.methods.checkDownloadOptions = function (font) {

    if (font.personal_font_file && font.commercial_font_file) {
        return false;
    } else {
        return true;
    }

};

module.exports = mongoose.model('Font', FontSchema);