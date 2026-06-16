import { Router } from "express";

import {
  getProducts,
  getProductById,
} from "../controllers/product.controller.js";

const router = Router();

//prefijo /api/products

router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
