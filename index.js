const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const uploadService = require("./controllers/upload");
const { pollingService } = require("./controllers/polling");
const {
  downloadMusicService,
  downloadVocalService,
} = require("./controllers/download");

const app = express();
const port = 8080;

app.use(cors());
app.use(fileUpload());
app.use(express.json());

app.get("/", (req, res) => {
  // send html file index.html stored in root directory
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/upload", uploadService);
app.get("/api/polling", pollingService);
app.get("/api/download/vocal", downloadVocalService);
app.get("/api/download/music", downloadMusicService);

app.listen(port, () =>
  console.log(`Vocals Splitter listening on port 
${port}!`)
);
