var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FontSchema = new Schema({
    name: String,
    slug: String,
    date_created: String,
    date_modified: String,
    price: Number,
    image: String,
    image_thumbnail: String,
    download_url: String,
    purchase_url: String,
    personal_use_details: String,
    commercial_use_details: String
});

// slug should be name to lowercase with dashes replacing spaces (also get rid of ampersands)

module.exports = mongoose.model('Font', FontSchema);