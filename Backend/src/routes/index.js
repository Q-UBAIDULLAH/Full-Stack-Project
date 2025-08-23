import { Router } from "express";
import UserRoutes from '../modules/user/routes.js'
import productroutes from '../modules/product/route.js'
import Cartroutes from '../modules/cart/route.js'
import uploadroute from'../modules/upload/route.js'
import orderroutes from '../modules/order/route.js'
const router=Router()

router.use('/user',UserRoutes)
router.use('/product',productroutes)
router.use('/cart',Cartroutes)
router.use('/order',orderroutes)
router.use('/upload',uploadroute)

export default router