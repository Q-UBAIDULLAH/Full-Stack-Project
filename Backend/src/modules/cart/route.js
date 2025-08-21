import { Router } from "express";
import additemController from "./controller/post.js";
import authMiddleware from "../../../config/Cartmiddleware.js";
import getCartController from "./controller/get.js";
import updateCartController from "./controller/update.js";
import removeCartController from "./controller/delete.js";

const router=Router()

router.post('/',authMiddleware,additemController)
router.get('/:userId',getCartController)
router.put('/',updateCartController)
router.delete('/',removeCartController)
export default router