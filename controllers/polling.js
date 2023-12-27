const fs = require("fs");

const pollingService = async (req, res) => {
  const { id } = req.query;
  // console.log(id);

  const isExists = fs.existsSync(`output/${id}/vocals.wav`);
  console.log(id, isExists);

  if (fs.existsSync(`output/${id}/vocals.wav`)) {
    res.status(200).json({
      message: "File found",
      isProcessed: true,
    });
  } else {
    res.status(200).json({
      message: "File not found",
      isProcessed: false,
    });
  }
};

module.exports = {
  pollingService,
};
