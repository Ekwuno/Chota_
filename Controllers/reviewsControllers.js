const Reviews = require('../Models/Reviews');

// Adding of Reviews
exports.addReview = (req, res, next) => {
    const reviews = new Reviews({
        commentBody: req.body.commentBody,
        placeId: req.body.placeId
    })
    reviews.save().then(review => {
        res.status(200).json({message: 'This review have been added successfully!'});
    }).catch(err => {
        res.status(404).json({message: 'Error occured while adding your review!'});
    });
}

exports.getAllReviewsOnAPlace = (req, res, next) => {
    Reviews.find({})
    .select('_id commentBody placeId')
    .exec()
    .then(reviews => {
        res.status(200).json({reviews});
    })
    .catch(err => {
        res.status(500).json({error: err})
    });
}
    //console.log('yay');