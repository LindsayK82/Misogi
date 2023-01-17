const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    eventText: {
        type: String,
        trim: true,
    }
});

const Event = model('Event', eventSchema);

module.exports = Event;