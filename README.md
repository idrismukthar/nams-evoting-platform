# 🗳️ NAMS LASU E-Voting Platform

A secure and user-friendly electronic voting system designed specifically for the Nigerian Association of Microbiology Students (NAMS), LASU Chapter.

## 📱 Live Demo
- Frontend: [https://nams-evoting.netlify.app](https://nams-evoting.netlify.app)
- Backend API: [https://nams-evoting-backend.onrender.com](https://nams-evoting-backend.onrender.com)

## ✨ Features

- 👤 **Secure Authentication**
  - Student registration with matric number validation
  - Password-protected login system
  - Session management for security

- 🗳️ **Voting System**
  - View candidate profiles with photos
  - One vote per student
  - Real-time vote counting
  - Live results display

- 👨‍💼 **Admin Panel**
  - Add/remove candidates
  - Upload candidate photos
  - Monitor voting progress
  - View detailed results

- 📱 **User Experience**
  - Mobile-friendly design
  - Simple, intuitive interface
  - Fast loading times
  - Real-time updates

## 🛠️ Technology Stack

- **Frontend:**
  - HTML5
  - CSS3 (with Flexbox/Grid)
  - Vanilla JavaScript

- **Backend:**
  - Node.js
  - Express.js
  - SQLite3 Database
  - Bcrypt (password hashing)

- **Deployment:**
  - Frontend: Netlify
  - Backend: Render
  - Database: SQLite (file-based)

## � Running Locally

### Prerequisites

1. **Install Node.js**
   ```bash
   # Download and install from
   https://nodejs.org/en/download/
   
   # Verify installation
   node --version
   npm --version
   ```

2. **Install Git**
   ```bash
   # Download and install from
   https://git-scm.com/downloads
   
   # Verify installation
   git --version
   ```

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   # Open terminal and run
   git clone https://github.com/idrismukthar/nams-evoting-platform.git
   cd nams-evoting-platform
   ```

2. **Setup Backend**
   ```bash
   # Navigate to backend folder
   cd backend
   
   # Install dependencies
   npm install
   
   # Start the server
   node server.js
   
   # You should see:
   # ✅ Connected to SQLite database
   # 🚀 Server running at http://localhost:4000
   ```

3. **Setup Frontend**
   ```bash
   # Open a new terminal
   # Install http-server globally
   npm install -g http-server
   
   # Navigate to frontend folder
   cd frontend
   
   # Start frontend server
   http-server -p 8080 --cors
   
   # You should see:
   # Available on: http://localhost:8080
   ```

4. **Access the Application**
   - Open your browser
   - Go to `http://localhost:8080`
   - Start using the application!

## 📝 API Documentation

### Authentication Endpoints
- `POST /register` - Register new student
- `POST /login` - Student login
- `POST /admin/login` - Admin login

### Voting Endpoints
- `GET /candidates` - List all candidates
- `POST /vote` - Cast a vote
- `GET /results` - View results

### Admin Endpoints
- `POST /admin/candidates` - Add candidate
- `DELETE /admin/candidates/:id` - Remove candidate

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email idrismukthar6@gmail.com or open an issue in this repository.

## 🙏 Acknowledgments

- NAMS LASU Chapter
- All contributors who have helped with testing and feedback
- The open-source community for the amazing tools
