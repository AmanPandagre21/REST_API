const mongoose = require("mongoose");
const validator = require("validator");
require("../db/conn");

const apiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
    required: true,
    validate(val) {
      if (val < 0) {
        throw new Error("Age can not be negative");
      }
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    minlength: [10, "mobile number conatin 10 numbers"],
  },

  address: {
    type: String,
    required: true,
    trim: true,
  },
});

const Apidata = new mongoose.model("Apidata", apiSchema);

module.exports = Apidata;
