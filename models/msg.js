const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const clientSchema =  new Schema ({
    clientName: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        required: true
    },
    clientMessage: {
        type: String,
        required: true
    },
}, {timestamps: true});

const client = mongoose.model('Client', clientSchema);

module.exports =  client;