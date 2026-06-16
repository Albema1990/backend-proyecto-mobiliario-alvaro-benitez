import { Router } from "express";

import {
  getProducts,
  getProductById,
  createProduct
} from "../controllers/product.controller.js";

const router = Router();

//prefijo /api/products

router.post("/", createProduct);

router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
