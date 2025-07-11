import express from 'express'
const router = express.Router()

import {createShop, getAllShop, getOneShop, updateShop, deleteShop, ShopsOwned, createManyShops} from '../controller/shop.controller.js'
import protect from '../middleware/protect.js'
import rolecheck from '../middleware/roleCheck.js'

router.post("/create", protect, rolecheck(['admin']) , createShop)
router.get("/all", getAllShop)
router.get("/owned", protect, ShopsOwned)
router.get("/:id", protect, getOneShop)
router.put("/:id", protect, updateShop)
router.delete("/:id", protect, deleteShop)

export default router;