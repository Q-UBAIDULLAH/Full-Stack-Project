import { Router } from "express";
import UserRoutes from '../modules/user/routes.js'
import productroutes from '../modules/product/route.js'
import uploadroute from'../modules/upload/route.js'
const router=Router()

router.use('/user',UserRoutes)
router.use('/product',productroutes)
router.use('/upload',uploadroute)

export default router