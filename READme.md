# Music Remover 🪄

This is a music splitter 🛠️ application that separates the vocals from any song uploaded to the API and returns the vocals audio file in a .wav format.
.
.

### Prerequisites 📋

Before running this application, you must have the following prerequisites 📝 installed:

- Node.js v14 or above
- ffmpeg
- Python3 v3.8 or above
- spleeter library (installed using pip)

#### Installing ffmpeg

**Windows** 🪟

1. Download the latest version of ffmpeg for Windows from the official website: https://ffmpeg.org/download.html#build-windows
2. Extract the downloaded zip file to a folder on your computer.
3. Add the folder containing the ffmpeg executable to your system's PATH environment variable.

**Linux** ;)

1. Open a terminal window.
2. Run the following command to install ffmpeg: sudo apt-get install ffmpeg
3. Once the installation is complete, you should be able to run ffmpeg from the terminal.
4. Installing Spleeter Library
5. Open a terminal window.
6. Run the following command to install the spleeter library: pip install spleeter
7. Once the installation is complete, you should be able to use the spleeter library in your Python applications.
   .
   .

---

### Getting Started ✅

To run this application, follow these steps: 🥅

1. Clone the repository: git clone https://github.com/<your_username>/music-remover.git
2. Change directory into the project folder: cd music-remover
3. Install the dependencies: npm install
4. Start the server: node index.js
5. Once the server is running, you can upload a song to the API at http://localhost:3000/api/upload and the server will return the vocals audio file in a .wav format.

---

_**After the response, the uploaded file and the generated vocals file will be automatically deleted from the server to save space**_.

---

### How It Works 🧠

This application uses the spleeter library to separate the vocals from the rest of the music. When a song is uploaded to the API, the application uses the spleeter library to split the song into its vocal and music components. The vocal component is then saved as a .wav file and returned as the response to the API request.

---

### Troubleshooting 🔨

If you encounter any issues running this application, please make sure that you have all of the prerequisites installed correctly. If you are still experiencing issues, please check the application logs for more information.

---

### Acknowledgements 🙏

This application was built using the spleeter library, which was created by Deezer Research. I am grateful to the Deezer Research team for their work on this library.
