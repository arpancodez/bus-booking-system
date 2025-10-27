const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
    required: true
  },
  bookingId: {
    type: String,
    unique: true,
    required: true
  },
  passengerDetails: [{
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true
    },
    seatNumber: {
      type: String,
      required: true
    }
  }],
  journeyDate: {
    type: Date,
    required: true
  },
  boardingPoint: {
    type: String,
    required: true
  },
  droppingPoint: {
    type: String,
    required: true
  },
  totalSeats: {
    type: Number,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentId: {
    type: String
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'upi', 'netbanking', 'wallet']
  },
  cancellationReason: String,
  cancelledAt: Date,
  refundAmount: Number,
  bookingDate: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

bookingSchema.pre('save', function(next) {
  if (!this.bookingId) {
    this.bookingId = `BKG${Date.now()}${Math.floor(Math.random() * 1000)}`;
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
