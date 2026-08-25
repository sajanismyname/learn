import { Router } from "express";

import asyncHandler from "../middleware/asyncHandler.js";
import { createProduct,getProducts, getProduct, deleteProduct, updateProduct } from "../controllers/product.controllers.js";


const router= Router();

router.route("/").post(asyncHandler(createProduct)).get(asyncHandler(getProducts))

router
    .route("/:id")
    .get(asyncHandler(getProduct))
    .put(asyncHandler(updateProduct))
    .delete(asyncHandler(deleteProduct))

export default router