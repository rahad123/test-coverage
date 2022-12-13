
const mongooses = require("mongoose")
const { Schema } = mongooses;
const mongoose = require("../db/db");
const objectId = Schema.ObjectId;

const userInformation = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
    },
    birthDate: {
      type: Date,
      trim: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const agencyConfigSchema = new Schema(
  {
    providerId: {
      type: String,
      trim: true,
      default: "id",
    },
    chatProvider: {
      type: String,
      trim: true,
      default: "none",
    },
    brandingColor: {
      type: String,
      trim: true,
      default: "red",
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
