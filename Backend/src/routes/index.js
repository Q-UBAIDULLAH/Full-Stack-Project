import { Router } from "express";
import UserRoutes from '../models/user/routes.js'
import productroutes from '../models/product/route.js'
import uploadroute from'../models/upload/route.js'
const router=Router()

router.use('/user',UserRoutes)
router.use('/product',productroutes)
router.use('/upload',uploadroute)

export default router