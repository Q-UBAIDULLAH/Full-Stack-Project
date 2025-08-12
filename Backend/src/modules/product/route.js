import { Router } from "express";
import PostController from "./controller/post.js";
import getController from "./controller/get.js";
import deleteController from "./controller/delete.js";
import updateController from "./controller/update.js";
import upload from "../../../config/uploadMiddleware.js";


const router=Router()

router.post('/',upload.single('image'),PostController)
router.get('/',getController)
router.delete('/:id',deleteController)
router.put('/:id',updateController)

export default router