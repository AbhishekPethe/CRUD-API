const { Router } = require("express");
const Product = require("../models/product.model.js");
const { getAllProducts , addProduct , getSingleProduct , updateProduct , deleteProduct } = require("../controllers/products.controller.js");
const router = Router();

// adding the product

router.post("/", addProduct);

// get all products

router.get("/", getAllProducts);

// get single product

router.get("/:name", getSingleProduct);

// updating the product

router.put("/:name", updateProduct);

// deleting the product

router.delete("/:name", deleteProduct);

module.exports = router;
