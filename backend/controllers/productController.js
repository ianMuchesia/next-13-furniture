const { NotFoundError } = require("../errors");
const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({
    success: true,
    product,
  });
};

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new NotFoundError(`product with id:${productId} not found`);
  }
  res.status(StatusCodes.OK).json(product);
};

const updateProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findByIdAndUpdate(
    { _id: productId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!product) {
    throw new NotFoundError(`product with id:${productId} not found`);
  }

  res.status(StatusCodes.OK).json({
    success: true,
  });
};

const deleteProduct = async (req, res) => {
  
    const { id: productId } = req.params;

    const product = await Product.findOneAndRemove({ _id: productId });

    if (!product) {
      throw new NotFoundError(`product with id:${productId} not found`);
    }

    res.status(StatusCodes.OK).json({
      success: true
     
    });

};

const getAllProductsByCategory = async (req, res) => {
  

  const products = await Product.find({})

  res.status(StatusCodes.OK).json({
    success: true,
    products,
  });
    // const {
    //   featured,
    //   category,
    //   search,
    //   sort,
    //   fields,
    //   brand,
    //   numericFilters,
    //   page,
    // } = req.query;

    // const queryObject = {};
    // //featured
    // if (featured) {
    //   queryObject.featured = featured === "true" ? true : false;
    // }

    // //category
    // if (category) {
    //   queryObject.category = category;
    // }
    // //brand
    // if (brand) {
    //   queryObject.brand = brand;
    // }
    // //search for an item
    // if (search) {
    //   queryObject.name = { $regex: search, $options: "i" };
    // }
    // if (numericFilters) {
    //   const opertorMap = {
    //     ">": "$gt",
    //     ">=": "$gte",
    //     "=": "$eq",
    //     "<": "$lt",
    //     "<=": "$lte",
    //   };
    //   const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    //   let filters = numericFilters.replace(
    //     regEx,
    //     (match) => `-${opertorMap[match]}-`
    //   );
    //   const options = ["price", "rating"];
    //   filters = filters.split(",").forEach((item) => {
    //     const [field, operator, value] = item.split("-");
    //     if (options.includes(field)) {
    //       queryObject[field] = { [operator]: Number(value) };
    //     }
    //   });
    //   //console.log(queryObject)
    // }

    // let result = Product.find(queryObject);
    // if (sort) {
    //   const sortArray = sort.split(",").join(" ");
    //   result = result.sort(sortArray);
    // } else {
    //   result = result.sort("createdAt");
    // }
    // //select the only one you want to see
    // if (fields) {
    //   const fieldList = fields.split(",").join(" ");
    //   result = result.select(fieldList);
    // }
    // //setting up pagination functionality
    // if (page) {
    //   const pagination = Number(page);
    //   const limit = Number(req.query.limit) || 9;
    //   const skip = (pagination - 1) * limit;

    //   result = result.skip(skip).limit(limit);
    // }

    // const products = await result;
    // console.log(products)
    // res.status(200).json({  products, nbHits: products.length });
 
};

module.exports = {
  getAllProductsByCategory,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
