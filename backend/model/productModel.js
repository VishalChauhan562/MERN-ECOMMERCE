import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  brand: { type: String, required: true },
  rating: Number,
  numReviews: Number,
  description: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reviews:[{ type: String }]
});

export const Product = mongoose.model('Product',productSchema)
