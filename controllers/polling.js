const fs = require("fs");

const pollingService = async (req, res) => {
  const { id } = req.query;

  const checkFile = () => {
    const isExists = fs.existsSync(`output/${id}/vocals.wav`);
    console.log(id, isExists);

    if (isExists) {
      res.status(200).json({
        message: "File found",
        isProcessed: true,
      });
    } else {
      setTimeout(checkFile, 1000); // Adjust the polling interval as needed (e.g., 1000ms = 1 second)
    }
  };

  checkFile(); // Initial check

  // You can also set a timeout for the overall request to avoid keeping the connection open indefinitely
  const requestTimeout = setTimeout(() => {
    res.status(200).json({
      message: "File not found",
      isProcessed: false,
    });
  }, 600000); // Adjust the overall timeout as needed (e.g., 60000ms = 60 seconds)

  // Ensure the connection is kept open
  req.on("close", () => {
    clearTimeout(requestTimeout);
  });
};

module.exports = {
  pollingService,
};
