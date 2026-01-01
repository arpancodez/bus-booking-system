/**
 * Bus Model Schema
 * Defines the MongoDB schema for buses including seating, type, and pricing information
 */
const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  seatNumber: {
    type: String,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    enum: ['standard', 'sleeper', 'semi-sleeper'],
    default: 'standard'
  },
  price: {
    type: Number,
    required: true
  }
});

const busSchema = new mongoose.Schema({
  busNumber: {
    type: String,
    required: [true, 'Please provide bus number'],
    unique: true
  },
  busName: {
    type: String,
    required: [true, 'Please provide bus name']
  },
  busType: {
    type: String,
    enum: ['AC', 'Non-AC', 'Sleeper', 'Semi-Sleeper', 'Luxury'],
    required: true
  },
  operator: {
    type: String,
    required: [true, 'Please provide operator name']
  },
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Route',
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  departureTime: {
    type: String,
    required: true
  },
  arrivalTime: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  totalSeats: {
    type: Number,
    required: true
  },
  availableSeats: {
    type: Number,
    required: true
  },
  seats: [seatSchema],
  amenities: [{
    type: String,
    enum: ['WiFi', 'Charging Point', 'Water Bottle', 'Blanket', 'TV', 'Reading Light']
  }],
  basePrice: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: Number,
    comment: String,
    date: {
      type: Date,
      default: Date.now
    }
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

busSchema.pre('save', function(next) {
  if (!this.seats || this.seats.length === 0) {
    this.seats = Array.from({ length: this.totalSeats }, (_, i) => ({
      seatNumber: `S${i + 1}`,
      isAvailable: true,
      type: 'standard',
      price: this.basePrice
    }));
  }
  next();
});

module.exports = mongoose.model('Bus', busSchema);
