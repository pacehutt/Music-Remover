const { spawn } = require("child_process");
const fs = require("fs");
const fs_extra = require("fs-extra");

const { filename } = require("../middlewares/upload");

const handleUpload = async (req, res) => {
  console.log("entered");

  if (fs.existsSync(`uploads/${filename}.mp3`)) {
    const spleeter = spawn("spleeter", [
      "separate",
      "-p",
      "spleeter:2stems-16kHz",
      "-o",
      "output/",
      `uploads/${filename}.mp3`,
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
      res.sendFile(`output/${filename}/vocals.wav`, {
        root: __dirname.replace("routes", ""),
      });
      fs.unlink(`uploads/${filename}.mp3`, (err) => {
        if (err) throw err;
        console.log("successfully deleted the audio file");
      });
      setTimeout(() => {
        fs_extra.remove(`output/${filename}`, (err) => {
          if (err) return console.error(err);
          console.log("success folder deleted!");
        });
      }, 120000);

      console.log("printing after sending the file");
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
