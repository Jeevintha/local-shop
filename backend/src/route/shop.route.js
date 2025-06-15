import express from 'express'
const router = express.Router()

import {createShop} from '../controller/shop.controller.js'

router.post("/create", createShop)







export default router;