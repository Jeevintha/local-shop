import express from 'express'
const router = express.Router()

import {createShop, getAllShop} from '../controller/shop.controller.js'
import protect from '../middleware/protect.js'
import rolecheck from '../middleware/roleCheck.js'

router.post("/create", createShop)
router.get("/all", protect, rolecheck(['admin']) , getAllShop)


export default router;