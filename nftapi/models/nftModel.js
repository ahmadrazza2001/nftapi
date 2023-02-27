const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "NFT must have a name"],
    unique: true,
    trim: true,
  },
  duration: {
    type: String,
    required: [true, "Must provide a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "NFT must have a group size"],
  },
  difficulty: {
    type: String,
    required: [true, "Must have difficulty"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "NFT must have a price"],
  },
  priceDiscount: {
    type: Number,
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "Must provide summary"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "Must provide cover image"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  stratDates: [Date],
});

const NFT = mongoose.model("NFT", nftSchema);

module.exports = NFT;
