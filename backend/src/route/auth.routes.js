import express from 'express';
const router = express.Router()


import {registerHandler, loginHandler} from '../controller/auth.controller.js'


router.post('/register', registerHandler)
router.post('/login', loginHandler)


export default router