import { Router } from "express";
import postOrderController from "./controller/post.js";
import authMiddleware from "../../../config/Cartmiddleware.js";
import getorderController from "./controller/get.js";

const router=Router()

router.post('/',authMiddleware,postOrderController)
router.get('/',authMiddleware,getorderController)

export default router