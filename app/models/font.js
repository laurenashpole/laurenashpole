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
    image_thumbnail: String,
    image_thumbnail_retina: String,
    color: String,
    css_file: String,
    personal_use_details: [],
    commercial_use_details: [],
    personal_font_file: String,
    commercial_font_file: String
});

FontSchema.methods.generateSlug = function (name) {
    return name.replace(/&/g, '').replace(/\s+/g, '-').toLowerCase();
};

FontScheme.methods.setButtonState = function (font) {

    if (font.personal_font_file && font.commercial_font_file) {
        return false;
    } else {
        return true;
    }

};

FontSchema.pre('save', function (next) {

    this.slug = this.generateSlug(this.name);
    this.has_single_button = this.setButtonState(this);

    next();

});

module.exports = mongoose.model('Font', FontSchema);