const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firebaseUid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String },
    role: {
      type: String,
      enum: ["Shopkeeper", "Staff", "Customer", "Admin"],
      default: "Shopkeeper",
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);