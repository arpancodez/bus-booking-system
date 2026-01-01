const mongoose = require('mongoose');

/**
 * Route Model Schema
 * Defines the MongoDB schema for bus routes with location and destination details
 */
const routeSchema = new mongoose.Schema({
  routeName: {
    type: String,
    required: [true, 'Please provide route name']
  },
  from: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  to: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  distance: {
    type: Number,
    required: true
  },
  estimatedDuration: {
    type: String,
    required: true
  },
  stops: [{
    stopName: {
      type: String,
      required: true
    },
    arrivalTime: String,
    departureTime: String,
    stopSequence: Number
  }],
  boardingPoints: [{
    name: String,
    address: String,
    landmark: String,
    time: String
  }],
  droppingPoints: [{
    name: String,
    address: String,
    landmark: String,
    time: String
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Route', routeSchema);
