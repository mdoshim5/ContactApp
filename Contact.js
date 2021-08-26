const {Schema, model} = require('mongoose');

let contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    }
})

let Contact = model('Contact', contactSchema);

module.exports = Contact;