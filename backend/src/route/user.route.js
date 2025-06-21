import express from 'express'
const router = express.Router()


import {deleteUser, getAllUsers, getOneUser} from "../controller/user.controller.js"

router.get("/all", getAllUsers)
router.get("/:id", getOneUser)
router.delete("/delete/:id", deleteUser)


export default router;