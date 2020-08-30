import { Document } from 'mongoose';

export class Order extends Document {
  date: Date;
  status: string;
  pickupAddress: string;
  dropAddress: string;
}
