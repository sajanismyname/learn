import { Router } from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import { validate } from "../middleware/validate.js";
import { createProduct, updateProduct, deleteProduct, getProducts, getProduct, replaceProduct  } from "../controllers/product.controllers.js";
import { productSchema, productUpdateSchema } from "../validator/productValidator.js";

const router= Router();

router.route("/")
    .post(validate(productSchema),asyncHandler(createProduct))
    .get(asyncHandler(getProducts))

router
    .route("/:id")
    .get(asyncHandler(getProduct))
    .patch(validate(productUpdateSchema),asyncHandler(updateProduct))
    .put(validate(productSchema),asyncHandler(replaceProduct))
    .delete(asyncHandler(deleteProduct))

export default router