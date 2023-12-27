const multer = require("multer");
const shortid = require("shortid");

// generate a unique filename using shortid
const filename = shortid.generate();

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, filename + ".mp3");
  },
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
});

const upload = multer({ storage });

module.exports = { upload, filename };
