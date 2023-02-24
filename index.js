const express = require("express");

const app = express();
const port = 3000;
const routes = require("./routes/file.routes");

const { upload } = require("./middlewares/upload");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/upload", upload.single("file"), routes.handleUpload);
app.get("/api/audio", routes.sendAudio);

app.listen(port, () =>
  console.log(`Example app listening on port 
${port}!`)
);
