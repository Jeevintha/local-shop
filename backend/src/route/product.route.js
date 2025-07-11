import express from "express"
const router = express.Router()

import { createProduct, getAllProducts, getProduct, deleteProduct, updateProduct } from "../controller/product.controller.js"
import protect from "../middleware/protect.js"
import ownerCheck from "../middleware/owner.js"

router.get('/all', protect, getAllProducts)
router.post('/create', protect, ownerCheck, createProduct)
router.get('/:id', protect, getProduct)
router.delete('/delete/:id', protect, ownerCheck, deleteProduct)
router.put("/:id", protect, updateProduct)

export default router