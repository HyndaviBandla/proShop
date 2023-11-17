import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
const app = express();
app.use(cors());
dotenv.config();
const port = process.env.PORT || 4000;
connectDB();
app.get("/", (req, res) => {
  res.send("API is running");
});
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
app.use("/api/products", productRoutes);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
