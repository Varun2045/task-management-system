<h3 align="center"> Task Management System</h3>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<div align="center">

**A powerful task management web app built with the MERN stack featuring authentication, dashboards, task analytics, and admin-user collaboration.**

</div>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<br>

<div align="center">

🔗 **Live Demo:** https://task-manager-frontend-jt51.onrender.com/

</div>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<h3 align="center">🚀 What It Does</h3>

<div align="center">

*"Create and assign tasks to team members with priorities and deadlines."*

*"Track real-time progress through checklists and status updates."*

*"Download Excel reports for tasks and user performance."*

</div>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<h3 align="center">🛠️ Tech Stack</h3>

<div align="center">

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js, React Router, Axios, Chart.js, Tailwind CSS, Toaster |
| **Backend** | Node.js, Express.js, Cors, Multer, ExcelJS |
| **Database** | MongoDB (Mongoose ORM) |
| **Authentication** | JSON Web Tokens (JWT), bcrypt |
| **Deployment** | Render (Backend + Frontend), GitHub |
| **Reports** | XLSX (Excel Export) |

</div>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<h3 align="center">🔧 Available Features</h3>

<div align="center">

| Feature | Description |
|---------|-------------|
| `JWT Authentication` | Secure login & registration with role-based access |
| `Admin Dashboard` | Full system overview with charts, task stats & team performance |
| `User Dashboard` | Personal task view with Pie & Bar chart analytics |
| `Task Management` | Create tasks with priority, due date, checklists & member assignment |
| `Excel Reports` | Download task & user performance reports in `.xlsx` format |
| `Responsive Design` | Fully optimized for Desktop, Tablet & Mobile |

</div>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<h3 align="center">📸 Screenshots</h3>

<div align="center">

<h4>🔐 Authentication — Login & Register</h4>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<br>

<img src="https://github.com/user-attachments/assets/d555e06e-871e-4b2c-97b2-91bd24532e82" alt="Login Page" width="700"/>
<img src="https://github.com/user-attachments/assets/ea5049f1-5785-4fb7-bbf2-583c78f5d579" alt="Register Page" width="700"/>

<h4>🧑‍💼 Admin Dashboard</h4>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<br>

<img src="https://github.com/user-attachments/assets/1727c1f5-517d-4dad-9556-5b4847dd9484" alt="Admin Dashboard" width="700"/>

<h4>👤 User Dashboard</h4>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<br>

<img src="https://github.com/user-attachments/assets/bc499c4d-ff56-44d4-b840-94665e520ae4" alt="User Dashboard" width="700"/>

<h4>📋 Task Creation (Admin)</h4>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<br>

<img src="https://github.com/user-attachments/assets/6a0cb1fd-c69a-48b7-ab7b-380c16c62fa0" alt="Task Creation" width="700"/>

<h4>📊 Reports & Analytics</h4>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<br>

<img src="https://github.com/user-attachments/assets/312310ec-3360-4211-9c92-3681c0ca83c0" alt="User Details Report" width="700"/>
<img src="https://github.com/user-attachments/assets/d73c154f-f0dd-45c5-8415-918147c402f3" alt="Task Details Report" width="700"/>

</div>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<h3 align="center">⚙️ Setup</h3>

**1. Clone the Repository**
```bash
git clone https://github.com/Varun2045/task-management-system.git
cd task-management-system
```

**2. Install Dependencies**
```bash
cd backend && npm install
cd ../frontend && npm install
```

**3. Add Environment Variables**
```bash
# Create a .env file inside the backend/ folder and add:
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
ADMIN_INVITE_TOKEN=7-digit-code-of-your-choice
```

**4. Run the App**
```bash
# Terminal 1 — Backend
cd backend && npm run dev

# Terminal 2 — Frontend
cd frontend && npm run dev
```

**5.** Open your browser at 👉 `http://localhost:5173`

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<h3 align="center">📦 Folder Structure</h3>

```
task-management-system/
│
├── frontend/              # React Frontend
│   ├── src/
│   │   ├── assets/        # Static files (images, icons, fonts)
│   │   ├── components/    # UI Components
│   │   ├── pages/         # Page Components
│   │   ├── context/       # Context API
│   │   ├── hooks/         # Custom Hooks
│   │   ├── utils/         # Helper Functions
│   │   ├── routes/        # Route Configuration
│   │   └── App.jsx
│   └── package.json
│
├── backend/               # Node + Express Backend
│   ├── config/            # Database & JWT Config
│   ├── controllers/       # Business Logic
│   ├── middleware/        # Auth Middleware
│   ├── models/            # Mongoose Models
│   ├── routes/            # API Routes
│   ├── uploads/           # User Profile Picture Storage
│   └── server.js
│
└── README.md
```

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<h3 align="center">📈 Future Enhancements</h3>

<div align="center">

💬 Task Comments Section &nbsp;|&nbsp; 📎 File Upload for Attachments &nbsp;|&nbsp; 📧 Email Notifications &nbsp;|&nbsp; 🌗 Dark / Light Mode Toggle

</div>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>

<h3 align="center">👨‍💻 Developer</h3>

<div align="center">

Built by **Varun Damani**

📧 varun.damani.12@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; 🔗 [github.com/Varun2045](https://github.com/Varun2045)

</div>

<div align="center"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></div>
