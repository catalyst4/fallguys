const mongoose = require('mongoose');

const RoundModel = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    videoLink: {
        type: String,
        required: false
    }

});

const Round = mongoose.model('Round', RoundModel);

module.exports = Round;