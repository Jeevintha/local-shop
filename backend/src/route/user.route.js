import express from 'express'
const router = express.Router()

import roleCheck from '../middleware/roleCheck.js'
import protect from '../middleware/protect.js'
import {deleteUser, getAllUsers, getOneUser} from "../controller/user.controller.js"

router.get("/all", protect, roleCheck(['admin']), getAllUsers)
router.get("/:id", protect, roleCheck(['admin']), getOneUser)
router.delete("/delete/:id", protect, roleCheck(['admin']), deleteUser)


export default router;