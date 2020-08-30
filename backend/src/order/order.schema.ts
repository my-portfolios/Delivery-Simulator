import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  date: Date,
  status: String,
  pickupAddress: String,
  dropAddress: String,
});
