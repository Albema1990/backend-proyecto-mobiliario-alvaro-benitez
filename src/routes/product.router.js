import { Router } from "express";

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

//prefijo /api/products

router.post("/", authMiddleware, createProduct);

router.get("/", getProducts);
router.get("/:id", getProductById);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
