# Smart-Voice-Assistant

## Live Demo
[https://smart-voice-valuefy-x86j.vercel.app/](#)  

## Video Demonstration
[https://drive.google.com/file/d/1ZEWxaiU89doMaYNVDXGtV4ekMGU_H0Ud/view?usp=sharing](#)  

## How to Run the Project

### Using Docker
1. Ensure you have [Docker](https://www.docker.com/) installed on your system.
2. Clone the repository:
   ```sh
   git clone https://github.com/aditya-1310/Smart-voice-Valuefy
   cd Smart-voice-Valuefy
   ```
3. Build and run the Docker container:
   ```sh
   docker compose up 
   ```
4. The application will be accessible at `http://localhost:PORT`.

### Running Locally via Command Line
1. Clone the repository:
   ```sh
   git clone https://github.com/aditya-1310/Smart-voice-Valuefy
   cd Smart-voice-Valuefy
   ```
2. Install dependencies for both backend and frontend:
   ```sh
   npm install
   ```
3. Start the backend:
   ```sh
   npm start
   ```
4. Open a new terminal and navigate to the frontend directory:
   ```sh
   cd Speech-recognition-app
   ```
5. Start the frontend:
   ```sh
   npm run dev
   ```
6. The application will be running at `http://localhost:PORT`.

## Project Description
### **Smart Voice Assistant for Professionals**  

This project is an **AI-powered voice assistant** designed to help professionals **automatically capture, process, and organize** key insights from meetings. It allows users to **record conversations, transcribe speech into text, extract important action items, and send structured summaries via email**.  

### **How It Works**  
1. **Voice Transcription** – Users record conversations, which are transcribed into text in real-time.  
2. **Summarization with Gemini AI** – The transcribed text is processed using **Google Gemini AI**, which intelligently extracts key points, tasks, and meeting details.  
3. **Email Integration** – The generated summary is automatically formatted and sent via email for easy reference and follow-ups.  

### **Tech Stack**  
🔹 **Frontend:** React.js – A dynamic and responsive UI for seamless user interaction.  
🔹 **Backend:** Node.js & Express – Handles API requests, processes transcriptions, and integrates with Gemini AI.  
🔹 **AI Processing:** Google Gemini AI – Summarizes key meeting insights and extracts action points.  
🔹 **Email Service:** Nodemailer – Sends the summarized meeting notes via email.  

By combining **AI-driven summarization** with **automated email sharing**, this project streamlines meeting workflows, ensuring professionals can stay engaged in discussions without losing critical information. 🚀

Feel free to explore the code and contribute to the project!

