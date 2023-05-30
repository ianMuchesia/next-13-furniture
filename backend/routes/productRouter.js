const express = require("express");
const { authorizePermissions} = require("../middleware/authentication");
const router = express.Router();

const {
  getAllProductsByCategory,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

//products
router.get("/", getAllProductsByCategory);

router.post("/", authorizePermissions("admini"), createProduct);
router.delete("/:id", authorizePermissions("admini"), deleteProduct);
router.patch("/", authorizePermissions("admini"), updateProduct);
router.get("/:id", getSingleProduct);

module.exports = router;
