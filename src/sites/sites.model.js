const mongooses = require("../../db/db");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const objectID = Schema.ObjectId;

const siteSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    domain: {
      type: String,
      unique: true,
      trim: true,
    },
    owner: {
      type: String,
      index: true,
    },
    dorikSitePrefix: {
      type: String,
      unique: true,
      trim: true,
    },
    globalStyle: {
      type: String,
      trim: true,
      default: "",
    },
    favicon: {
      type: String,
      trim: true,
    },
    categories: [
      {
        type: objectID,
        ref: "Category",
      },
    ],
    tags: [
      {
        type: objectID,
        ref: "Tag",
      },
    ],
    limits: {
      category: {
        type: Number,
        default: 100,
      },
      tag: {
        type: Number,
        default: 100,
      },
      members: {
        type: Number,
        default: 500,
      },
      teamMembers: {
        type: Number,
        default: 0,
      },
    },
    portalDesign: {
      type: String,
      trim: true,
    },
    isURLRedirectEnabled: {
      type: Boolean,
      trim: true,
      default: false,
    },
    isWwwRedirectEnabled: {
      type: Boolean,
      default: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Site = mongooses.model("Site", siteSchema);
module.exports = Site;
