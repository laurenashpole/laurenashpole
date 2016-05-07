var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FontSchema = new Schema({
    name: String,
    slug: String,
    date_created: String,
    date_modified: String,
    price: Number,
    image: String,
    image_retina: String,
    image_thumbnail: String,
    image_thumbnail_retina: String,
    download_url: String,
    purchase_url: String,
    personal_use_details: String,
    commercial_use_details: String,
    color: String,
    css_file: String
});

FontSchema.methods.generateSlug = function (name) {
    return name.replace(/&/g, '').replace(/\s+/g, '-').toLowerCase();;
};

module.exports = mongoose.model('Font', FontSchema);