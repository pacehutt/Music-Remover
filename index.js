const express = require("express");

const app = express();
const port = 3000;

const routes = require("./routes/file.routes");

const { upload } = require("./middlewares/upload");

app.get("/", (req, res) => {
  res.send("🛠️Music Splitter up and running😶‍🌫️!");
});

app.post("/api/upload", upload.single("file"), routes.handleUpload);

app.listen(port, () =>
  console.log(`Music Splitter listening on port 
${port}!`)
);
