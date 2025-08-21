import { Router } from "express";
import PostController from "./controller/post.js";
import getController from "./controller/get.js";
import deleteController from "./controller/delete.js";
import updateController from "./controller/update.js";
import upload from "../../../config/uploadMiddleware.js";
import Tokenverification from "../../../config/Token_verification.js";


const router=Router()

router.post('/',upload.single('image'),PostController)
router.get('/',Tokenverification,getController)
router.delete('/:id',Tokenverification,deleteController)
router.put('/:id',Tokenverification,updateController)

export default router