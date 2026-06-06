# 📁 Project Structure & Architecture

This document explains the structure and organization of the Prescripto project.

## Overall Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     PRESCRIPTO SYSTEM                        │
└─────────────────────────────────────────────────────────────┘
         │                    │                    │
         ▼                    ▼                    ▼
    ┌─────────┐          ┌─────────┐         ┌──────────┐
    │ FRONTEND│          │  ADMIN  │         │ BACKEND  │
    │ (React) │          │ (React) │         │(Node.js) │
    └─────────┘          └─────────┘         └──────────┘
    Patients            Administrators       API Server
    Port 5173           Port 5174            Port 5000
         │                    │                    │
         └────────────────────┴────────────────────┘
                    All connect via
               REST API (HTTP requests)
```

---

## 📂 Root Directory Structure

```
Prescripto/
├── frontend/                    # Patient web application
├── admin/                       # Admin dashboard application
├── backend/                     # API server & database
├── README.md                    # Project overview (START HERE)
├── SETUP_GUIDE.md              # Step-by-step setup instructions
├── PROJECT_STRUCTURE.md         # This file
├── .gitignore                  # Ignore node_modules, .env, etc.
└── ProjectDocumentation.md     # Original project notes
```

---

## 🖥️ FRONTEND Structure

**Location:** `frontend/`  
**Purpose:** Patient/User facing web application  
**Technology:** React + Vite  
**Port:** 5173

```
frontend/
├── src/
│   ├── main.jsx               # Entry point
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   ├── assets/
│   │   └── assets.js          # Images, icons, logos
│   ├── Component/
│   │   ├── Header.jsx         # Top header
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Footer.jsx         # Footer
│   │   ├── Banner.jsx         # Hero banner
│   │   ├── SpecialityMenu.jsx # Filter by doctor specialty
│   │   ├── TopDoctors.jsx     # Featured doctors list
│   │   └── RelatedDoctors.jsx # Related doctors for appointments
│   ├── context/
│   │   └── AppContext.jsx     # Global state (users, doctors, etc.)
│   └── Pages/
│       ├── Home.jsx           # Landing page (/)
│       ├── Doctors.jsx        # Browse all doctors (/doctors)
│       ├── About.jsx          # About page (/about)
│       ├── Contact.jsx        # Contact page (/contact)
│       ├── Login.jsx          # Login/Register (/login)
│       ├── Appointment.jsx    # Book appointment (/appointment/:id)
│       ├── MyAppointment.jsx  # View my appointments (/my-appointments)
│       └── MyProfile.jsx      # User profile (/my-profile)
├── public/                    # Static files
├── index.html                 # HTML template
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
├── .env.example               # Template for environment variables
├── .gitignore                 # Files to ignore in git
├── eslint.config.js           # Code quality rules
└── README.md                  # Frontend-specific documentation
```

### Frontend Features
- ✅ Browse doctors by specialty
- ✅ View doctor profiles
- ✅ Book appointments
- ✅ User login/register
- ✅ View appointment history
- ✅ Manage profile
- ✅ Responsive design

### Frontend Routes
| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home.jsx | Landing page |
| `/doctors` | Doctors.jsx | Browse all doctors |
| `/about` | About.jsx | About Prescripto |
| `/contact` | Contact.jsx | Contact form |
| `/login` | Login.jsx | Login/signup page |
| `/appointment/:docId` | Appointment.jsx | Book appointment |
| `/my-appointments` | MyAppointment.jsx | View booked appointments |
| `/my-profile` | MyProfile.jsx | Edit user profile |

---

## 👨‍💼 ADMIN Structure

**Location:** `admin/`  
**Purpose:** Administrator dashboard for managing doctors and appointments  
**Technology:** React + Vite  
**Port:** 5174

```
admin/
├── src/
│   ├── main.jsx               # Entry point
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   ├── assets/
│   │   └── assets.js          # Images, icons, logos
│   ├── components/
│   │   ├── Navbar.jsx         # Top navigation
│   │   └── Sidebar.jsx        # Side navigation menu
│   ├── context/
│   │   ├── AdminContext.jsx   # Admin state management
│   │   ├── AppContext.jsx     # App-wide state
│   │   └── DoctorContext.jsx  # Doctor management state
│   └── pages/
│       ├── Login.jsx          # Admin login page (/login)
│       └── Admin/
│           ├── Dashboard.jsx      # Main dashboard (/dashboard)
│           ├── AllApointments.jsx # View all appointments
│           ├── AddDoctor.jsx      # Add new doctor form
│           └── DoctorsList.jsx    # View all doctors
├── public/                    # Static files
├── index.html                 # HTML template
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
├── .env.example               # Template for environment variables
├── .gitignore                 # Files to ignore in git
├── eslint.config.js           # Code quality rules
└── README.md                  # Admin-specific documentation
```

### Admin Features
- ✅ Secure admin login
- ✅ Add/edit/delete doctors
- ✅ View all appointments
- ✅ Manage users
- ✅ Dashboard statistics
- ✅ Responsive design

### Admin Routes
| Route | Component | Purpose |
|-------|-----------|---------|
| `/login` | Login.jsx | Admin login |
| `/dashboard` | Dashboard.jsx | Main admin dashboard |
| `/all-appointments` | AllApointments.jsx | View all appointments |
| `/add-doctor` | AddDoctor.jsx | Add new doctor |
| `/doctors-list` | DoctorsList.jsx | View/manage doctors |

---

## 🔧 BACKEND Structure

**Location:** `backend/`  
**Purpose:** REST API server, database operations, business logic  
**Technology:** Node.js + Express + MongoDB  
**Port:** 5000

```
backend/
├── server.js                  # Main server file (START POINT)
├── config/
│   ├── mongodb.js             # MongoDB connection setup
│   └── cloudinary.js          # Cloudinary image upload setup
├── models/                    # Database schemas
│   ├── userModel.js           # Patient/user schema
│   ├── doctorModel.js         # Doctor profile schema
│   └── appointmentModel.js    # Appointment booking schema
├── controllers/               # Business logic for routes
│   ├── userController.js      # User registration, login, profile
│   ├── doctorController.js    # Doctor profile, appointments
│   └── adminController.js     # Admin operations
├── routes/                    # API endpoint definitions
│   ├── userRoute.js           # /api/user/* endpoints
│   ├── doctorRoute.js         # /api/doctor/* endpoints
│   └── adminRoute.js          # /api/admin/* endpoints
├── middlewares/               # Middleware functions
│   ├── authUser.js            # Verify user authentication
│   ├── authDoctor.js          # Verify doctor authentication
│   ├── authAdmin.js           # Verify admin authentication
│   └── multer.js              # Handle file uploads
├── package.json               # Dependencies & scripts
├── .env.example               # Template for environment variables
├── .gitignore                 # Files to ignore in git
└── README.md                  # Backend-specific documentation
```

### Backend API Endpoints

**User Routes** (`/api/user/*`)
- `POST /register` - Create new account
- `POST /login` - User login
- `GET /profile` - Get user profile
- `POST /update-profile` - Update profile
- `GET /appointments` - Get user's appointments
- `POST /book-appointment` - Book new appointment
- `POST /cancel-appointment` - Cancel appointment

**Doctor Routes** (`/api/doctor/*`)
- `POST /register` - Doctor registration
- `POST /login` - Doctor login
- `GET /profile` - Get doctor profile
- `POST /update-profile` - Update profile
- `GET /appointments` - Get doctor's appointments

**Admin Routes** (`/api/admin/*`)
- `POST /login` - Admin login
- `GET /dashboard` - Get dashboard data
- `POST /add-doctor` - Add new doctor
- `GET /doctors` - Get all doctors
- `POST /remove-doctor` - Remove doctor
- `GET /appointments` - Get all appointments
- `POST /cancel-appointment` - Cancel appointment

### Database Collections
- **users** - Patient accounts (name, email, password, appointments)
- **doctors** - Doctor profiles (name, specialty, fees, available slots)
- **appointments** - Bookings (doctor, patient, date, status)

---

## 🔄 How They Connect

```
Frontend (5173)
     │
     │ HTTP Requests
     │ (fetch/axios)
     ▼
Backend API (5000)
     │
     └─► MongoDB (Database)
     │
     └─► Cloudinary (Image uploads)
     │
     └─► Razorpay (Payments)
     │
     │ HTTP Responses
     ▼
Frontend displays data
```

---

## 📊 Data Flow Example: Booking Appointment

1. **User clicks "Book Appointment"** (Frontend)
2. Frontend sends POST request to Backend API
3. Backend validates user authentication
4. Backend creates appointment record in MongoDB
5. Backend sends confirmation response
6. Frontend receives data & updates UI
7. User sees appointment confirmation

---

## 🔐 Authentication Flow

```
1. User enters email & password on Login page
2. Frontend sends to Backend: POST /api/user/login
3. Backend validates credentials in MongoDB
4. Backend creates JWT token
5. Backend returns token to Frontend
6. Frontend stores token (localStorage)
7. Future requests include token in headers
8. Backend verifies token for protected routes
9. If valid, allow access. If not, return 401 error
```

---

## 📦 Key Dependencies

### Frontend & Admin
- **react** - UI library
- **react-router-dom** - Navigation between pages
- **axios** - Make HTTP requests
- **vite** - Fast build tool

### Backend
- **express** - Web framework
- **mongoose** - MongoDB connection
- **jsonwebtoken** - Create JWT tokens
- **bcryptjs** - Hash passwords
- **multer** - Handle file uploads
- **cloudinary** - Image storage
- **cors** - Enable cross-origin requests

---

## 🚀 Development Workflow

1. **Edit code** in any folder
2. **Save file** (Ctrl+S)
3. **Vite/Frontend** automatically reloads (hot reload)
4. **Backend** - Restart to see changes (`npm start`)
5. **View changes** in browser

---

## 📝 Important Files to Understand

### Must Read First
1. `README.md` - Project overview
2. `SETUP_GUIDE.md` - How to install & run
3. `PROJECT_STRUCTURE.md` - This file

### Then Explore
- `backend/server.js` - Main backend entry point
- `frontend/src/App.jsx` - Frontend main component
- `admin/src/App.jsx` - Admin main component
- `backend/routes/*.js` - API endpoints available

### Configuration
- `backend/.env` - Backend credentials & settings
- `frontend/.env` - Frontend API URL
- `admin/.env` - Admin API URL
- `.gitignore` - Files not pushed to GitHub

---

## 🎯 Quick Navigation

| Want to... | Go to | File |
|-----------|-------|------|
| Setup project | Root | SETUP_GUIDE.md |
| Understand overall | Root | README.md |
| Add patient feature | frontend/ | src/Pages/ or src/Component/ |
| Add admin feature | admin/ | src/pages/Admin/ |
| Add API endpoint | backend/ | routes/*.js and controllers/*.js |
| Change database | backend/ | models/*.js |
| Change styling | any folder | index.css or component.css |

---

## 💡 Tips

- Each folder has its own `package.json` and dependencies
- `.env.example` shows what variables each app needs
- Always run 3 terminals: 1 for backend, 1 for frontend, 1 for admin
- Frontend/Admin hot reload = instant updates without restart
- Backend needs restart after code changes
- Check browser console (F12) for frontend errors
- Check terminal for backend errors

---

**Ready to code? Start with SETUP_GUIDE.md!**
