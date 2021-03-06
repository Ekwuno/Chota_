const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    name: { type: String },
    image: { type: String },
    imageID: { type: String },
    description: { type: String },
    date: { type: Date, default: Date.now },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    ratings: { type: Number },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reviews' }],
    view: { type: Number, default: 0 },
    trendVol: { type: Number, default: 0 }
});

module.exports = mongoose.model('Place', placeSchema);