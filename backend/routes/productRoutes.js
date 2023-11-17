import express from "express";
// import products from "../data/products";

import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel";
const router = express.Router();

// we're going to create an async handler because we're going to be using async await because the mongoose or the model methods, which are mongoose methods are are asynchronous.So we need to use a sync.
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); //passing empty bcs we need all with out any filtering
    res.json(products);
  })
);
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }
    res.status(404).json({ message: "product not found" });
  })
);
export default router;
