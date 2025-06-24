import express from "express"
const router = express.Router()

import {createProduct, getAllProducts, getProduct} from "../controller/product.controller.js"


router.get('/all', getAllProducts)
router.post('/create', createProduct)
router.get('/:id',getProduct)


export default router