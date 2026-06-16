import { Router } from "express";

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct
} from "../controllers/product.controller.js";

const router = Router();

//prefijo /api/products

router.post("/", createProduct);

router.get("/", getProducts);
router.get("/:id", getProductById);

router.put("/:id", updateProduct);

export default router;
