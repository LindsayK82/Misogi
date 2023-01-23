const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String
    }
});

const Events = model('Events', eventSchema);

module.exports = Events;