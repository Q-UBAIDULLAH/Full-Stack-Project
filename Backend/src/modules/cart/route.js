import { Router } from "express";
import additemController from "./controller/post.js";
import authMiddleware from "../../../config/Cartmiddleware.js";

const router=Router()

router.post('/',authMiddleware,additemController)
export default router