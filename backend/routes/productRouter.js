const express = require("express");
const { authorizePermission} = require("../middleware/authentication");
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

router.post("/", authorizePermission("admini"), createProduct);
router.delete("/:id", authorizePermission("admini"), deleteProduct);
router.patch("/", authorizePermission("admini"), updateProduct);
router.get("/:id", getSingleProduct);

module.exports = router;
