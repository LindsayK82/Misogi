const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  time: {
    type: Date,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: false,
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Event = model('event', eventSchema);

module.exports = Event;