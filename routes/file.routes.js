const { spawn } = require("child_process");
const fs = require("fs");

const handleSpawn = () => {
  const spleeter = spawn("spleeter", [
    "separate",
    "-o",
    "output/",
    "uploads/example.mp3",
  ]);

  // collect data from script
  spleeter.stdout.on("data", (data) => {
    console.log("Okey entered");
    console.log(`stdout:\n${data}`);
  });
  spleeter.stderr.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  spleeter.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    return;
  });
};

const handleUpload = async (req, res) => {
  console.log("entered");

  if (fs.existsSync("uploads/example.mp3")) {
    const spleeter = spawn("spleeter", [
      "separate",
      "-o",
      "output/",
      "uploads/example.mp3",
    ]);

    // collect data from script
    spleeter.stdout.on("data", (data) => {
      console.log("Okey entered");
      console.log(`stdout:\n${data}`);
    });
    spleeter.stderr.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    spleeter.on("close", (code) => {
      console.log(`child process close all stdio with code ${code}`);
      res.sendFile("output/example/vocals.wav", {
        root: __dirname.replace("routes", ""),
      });
    });

    // if (fs.existsSync("output/example/vocals.wav")) {

    // }
  }
};

const sendAudio = (res) => {};

module.exports = {
  handleUpload,
  sendAudio,
};
