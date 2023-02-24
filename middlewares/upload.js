const multer = require("multer");
const shortid = require("shortid");

const filename = shortid.generate();

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    // console.log(shortid, "filename", file.originalname, "file");
    cb(null, filename + ".mp3");
  },
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
});

const upload = multer({ storage });

module.exports = { upload, filename };
