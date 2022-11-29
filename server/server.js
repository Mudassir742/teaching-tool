const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");

const unlinkAsync = promisify(fs.unlink);

const app = express();

//const fileUpload = require("express-fileupload");

//app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public/"));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, "VIDEO-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "100mb" },
});

const port = 5000;

app.post("/video-edit", upload.single("videoBlob"), (req, res) => {
  try {
    console.log(req.file.filename);

    const videoSource = "/uploads/" + req.file.filename;

    return res.status(200).json({ url: videoSource });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "server error" });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
