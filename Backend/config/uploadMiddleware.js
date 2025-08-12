import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("destination",file)
    cb(null, 'src/modules/upload/file')
  },
  filename: function (req, file, cb) {
       console.log("filename",file)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,  uniqueSuffix+ '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

export default upload