const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const serviceSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  serviceName: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  discount: {
    trim: true,
    type: Number,
  },
  duration: {
    trim: true,
    type: Number,
  },
  category: {
    type: String,
    trim: true,
  },
  imageId: {
    type: String,
    trim: true,
  },

  status: {
    // TODO: 'Change the status name for Full',
    type: String,
    enum: ['Avalable', 'Not Avalable', 'Coming Soon', 'Full'],
    required: true,
  },

});

module.exports = mongoose.model('service', serviceSchema);