import { Router } from "express";
import multer from "multer";
import uploadController from "./controller/upload.js";

const router=Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("destination",file)
    cb(null, 'src/models/upload/file')
  },
  filename: function (req, file, cb) {
       console.log("filename",file)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,  uniqueSuffix+ '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/',upload.single('image'),uploadController)
export default router