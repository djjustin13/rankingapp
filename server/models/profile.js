const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    image: {
        type: String,
        required: [true, 'Image cannot be blank.'],
    },
    conclusions: [{
        type: String
    }]
});

module.exports = mongoose.model('Profile', profileSchema);