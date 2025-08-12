import { Router } from "express";
import Signupcontroller from "./controller/signup.js";
import loginController from "./controller/login.js";
import ProductController from "../product/controller/post.js";

const router=Router()

router.post('/signup',Signupcontroller)
router.post('/login',loginController)


export default router