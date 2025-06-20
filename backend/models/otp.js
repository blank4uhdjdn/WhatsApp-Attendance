const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    generatedOtp: {
      type: String,
      required: true,
    }
   
  },
  { timestamps: true }
);

const Otp = mongoose.model("Otp", userSchema);

module.exports = Otp;
