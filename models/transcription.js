const mongoose = require('mongoose');


const schema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        transcription: {
            type: String,
            required: true
        },
        wavurl:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("transcription", schema);