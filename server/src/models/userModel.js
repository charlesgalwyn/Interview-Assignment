const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    destination: {
      type: String,
      trim: true,
    },
    totalTravellers: {
      type: Number,
      trim: true,
    },
    budgetPerPerson: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
