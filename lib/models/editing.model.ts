import { Schema, model, models } from "mongoose";

const EditingSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  stripeId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  plan: { type: String },
  coins: { type: Number },
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Editing = models?.Editing || model("Editing", EditingSchema);

export default Editing;