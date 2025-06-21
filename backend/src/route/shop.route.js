import express from 'express'
const router = express.Router()

import {createShop, getAllShop} from '../controller/shop.controller.js'

router.post("/create", createShop)
router.get("/all", getAllShop)



export default router;