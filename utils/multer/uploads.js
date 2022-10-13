const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const { email } = req.body
    cb(null, Date.now().toLocaleString() + "-" + email + "-" + file.originalname);
  },
});

const uploads = multer({ storage: storage });

module.exports = uploads;
