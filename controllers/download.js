const fs = require("fs");

const downloadVocalService = async (req, res) => {
  const { id } = req.query;
  // console.log(id);

  const isExists = fs.existsSync(`output/${id}/vocals.wav`);
  console.log(id, isExists);

  if (fs.existsSync(`output/${id}/vocals.wav`)) {
    res.sendFile(`output/${id}/vocals.wav`, {
      root: __dirname.replace("controllers", ""),
    });
  } else {
    res.status(200).json({
      message: "File not found",
      isProcessed: false,
    });
  }
};

const downloadMusicService = async (req, res) => {
  const { id } = req.query;
  // console.log(id);

  const isExists = fs.existsSync(`output/${id}/vocals.wav`);
  console.log(id, isExists);

  if (fs.existsSync(`output/${id}/accompaniment.wav`)) {
    res.sendFile(`output/${id}/accompaniment.wav`, {
      root: __dirname.replace("controllers", ""),
    });
  } else {
    res.status(200).json({
      message: "File not found",
      isProcessed: false,
    });
  }
};

module.exports = {
  downloadVocalService,
  downloadMusicService,
};
