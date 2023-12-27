const shortid = require("shortid");
const fs = require("fs");
const { processService } = require("./process");

const uploadService = async (req, res, next) => {
  const filename = req.headers["file-name"];
  // console.log(req.body, "here");
  const { chunk, chunkId, totalChunks } = req.body;
  console.log(chunkId, totalChunks);

  fs.appendFileSync(`./uploads/${filename}`, Buffer.from(chunk));

  if (parseInt(chunkId) === parseInt(totalChunks)) {
    console.log(filename);
    await processService(filename);
    res.status(200).json({
      message: "File uploaded successfully",
      processing: true,
    });
  } else {
    console.log("Chunk recieved");
    res.status(200).json({
      message: "Chunk recieved successfully",
      processing: false,
    });
  }
};

module.exports = uploadService;
