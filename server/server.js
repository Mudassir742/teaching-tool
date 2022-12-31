require("dotenv").config(".env");

const express = require("express");
const fs = require("fs");
const { execSync } = require("child_process");
const cors = require("cors");

const app = new express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const fetchWebsite = (url) => {
  execSync(`wget -q -O - ${url} > /tmp/site.html`, (error, stdout, stderr) => {
    if (error !== null) {
      return false;
    }
  });
};

app.get("/", async (req, res) => {
  try {
    fs.writeFileSync("./tmp/site.html", "", () => console.log("Created site.html"));
    fs.createReadStream("/tmp/site.html").pipe(res);
    fetchWebsite("https://clideo.com/editor/");
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ error: "server error" });
  }
});

app.listen(PORT, () => {
  console.log("Listening at port: ", PORT);
});

module.exports = app;
