import express from "express"
const router = express.Router()

import {createProduct, getAllProducts, getProduct, deleteProduct} from "../controller/product.controller.js"


router.get('/all', getAllProducts)
router.post('/create', createProduct)
router.get('/:id',getProduct)
router.delete('/delete/:id', deleteProduct)


export default router