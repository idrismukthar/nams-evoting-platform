# 🗳️ NAMS LASU E-Voting Platform

A simple, secure, and lightweight electronic voting system built for the **Nigerian Association of Microbiology Students (NAMS), LASU Chapter**.

This project allows students to **register, log in, view candidates, and cast votes** — all digitally and safely.

---

## 🚀 Features
✅ Student registration (restricted to Microbiology students)  
✅ Secure login using hashed passwords  
✅ Admin can add and delete candidates with images  
✅ Students can vote only once  
✅ Real-time vote counting & live results  
✅ Simple, mobile-friendly interface  

---

## 🧩 Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js (Express)  
- **Database:** SQLite3  
- **Hosting:** Render (backend) + Netlify (frontend)  

---

## 🛠️ How To Run This Project (Step-by-Step for Beginners)

### 🧱 1. Install Node.js
Go to [https://nodejs.org](https://nodejs.org) and download **Node.js LTS** version.  
Then check it works on terminal or powershell:

```bash
node -v
npm -v

💾2. Clone the Project

Open your terminal and run:

git clone https://github.com/idrismukthar/nams-evoting-platform.git
cd nams-evoting-platform

📦 3. Install Dependencies

Run this in your vs code terminal :

(npm install express sqlite3 bcrypt body-parser cors multer)

🧠 4. Start the Server

in the terminal type these exactly 

node server.js


You should see:

✅ Connected to SQLite database.
🚀 Server running at http://localhost:4000


💻 5. Open the Frontend

Now open index.html in your browser (use Live Server in VS Code).

Register a student

Log in

Vote for candidates

Check results on results.html
