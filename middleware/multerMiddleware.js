//multer

const multer = require("multer");

//storeFile

const storage = multer.diskStorage({
  //where the file is stored
  destination: (req, file, callback) => {
    callback(null, "./uploads"); //path in which file is stored
  },

  //filename
  filename: (req, file, callback) => {
    const filename = `image-${Date.now()}-${file.originalname}`; //formate of storing filename
    callback(null, filename); //setting file name
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    callback(new Error("only png , jpg & jpeg files are accepted"));
  }
};


const multerConfig = multer({storage, fileFilter })  //const upload = multer({ storage: storage ,fileFilter:fileFilter})

module.exports = multerConfig