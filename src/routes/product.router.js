import { Router } from "express";

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middlewares.js"

const router = Router();

//prefijo /api/products

router.post("/", authMiddleware, adminMiddleware, createProduct);

router.get("/", getProducts);
router.get("/:id", getProductById);

router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id",authMiddleware, deleteProduct);

export default router;
