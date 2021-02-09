const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for contact
let Contact = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    }
});

module.exports = mongoose.model('Contact', Contact);