import { Router } from "express";
import UserRoutes from '../models/user/routes.js'
const router=Router()

router.use('/user',UserRoutes)

export default router