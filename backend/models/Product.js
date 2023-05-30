const mongoose = require("mongoose");

//Slugs are used in web development and search engine optimization (SEO) to create more readable and user-friendly URLs.

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide product name"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide product description"],
      maxlength: [1000, "Description can not be more than 1000 characters"],
    },
    price: {
      type: Number,
      required: [true, "product price must be provided"],
    },
   
    brand: {
      type: String,
      enum: {
        values: ["Furniture Co", "Outdoor Co", "Kitchen Co"],
        message: "{VALUE} is not supported",
      },
    },
    category: {
      type: String,
      enum: {
        values: [
          "Living Room",
          "Kitchen",
          "Outdoor",
          "Bedroom",
          "Entryway",
          "Office",
          "Dining Room",
        ],
      },
    },
    material: {
      type: String,
      required: [true, "please provide type of material"],
    },

    imageUrl: {
      type: String,
      required: [true, "please provide an image"],
    },
    featured: {
      type: Boolean,
      default: false,
    },

    InStock: {
      type: Number,
      required: [true, "Number of products in stock must be provided"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    averageRating: {
      type: Number,
      default: 4,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
ProductSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "product",
  justOne: false,
});


ProductSchema.pre("remove", async function (next) {
  await this.model("Review").deleteMany({ product: this._id });
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
