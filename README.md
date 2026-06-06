# Prescripto - Doctor Appointment Booking System

A full-stack MERN application for booking doctor appointments with role-based access for patients, doctors, and administrators.

## 🎯 Quick Overview

This project has **3 separate applications**:

| Application | Purpose | Technology | Port |
|------------|---------|-----------|------|
| **Frontend** | Patient web app for browsing doctors & booking appointments | React + Vite | 5173 |
| **Admin** | Admin dashboard for managing doctors & appointments | React + Vite | 5174 |
| **Backend** | REST API server with database & business logic | Node.js + Express | 5000 |

## 📁 Project Structure

```
Prescripto/
├── frontend/           # Patient application
│   ├── src/
│   ├── package.json
│   ├── .env.example
│   ├── .gitignore
│   └── README.md
├── admin/              # Admin dashboard
│   ├── src/
│   ├── package.json
│   ├── .env.example
│   ├── .gitignore
│   └── README.md
├── backend/            # API server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── .gitignore
│   └── README.md
└── README.md           # This file
```

## 🚀 Quick Start (5 minutes)

### Prerequisites
- Node.js v14+ installed
- MongoDB Atlas account
- Cloudinary account
- Razorpay account

### Step 1: Backend Setup
```bash
cd backend
npm install
copy .env.example .env
# Edit .env with your MongoDB, Cloudinary & Razorpay credentials
npm start
```
✅ Backend runs on `http://localhost:5000`

### Step 2: Frontend Setup
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```
✅ Frontend runs on `http://localhost:5173`

### Step 3: Admin Setup
```bash
cd admin
npm install
copy .env.example .env
npm run dev
```
✅ Admin runs on `http://localhost:5174`

**Done!** All 3 apps are now running and connected.

## 🔑 Required Environment Variables

### Backend `.env`
```
MONGODB_URI='your_mongodb_connection_string'
CLOUDINARY_NAME='your_cloudinary_name'
CLOUDINARY_API_KEY='your_api_key'
CLOUDINARY_SECRET_KEY='your_secret_key'
ADMIN_EMAIL='admin@prescripto.com'
ADMIN_PASSWORD='your_password'
JWT_SECRET='your_jwt_secret'
RAZORPAY_KEY_ID='your_key_id'
RAZORPAY_KEY_SECRET='your_secret'
CURRENCY='INR'
```

### Frontend & Admin `.env`
```
VITE_BACKEND_URL='http://localhost:5000'
```

## ⚠️ Important Before Pushing to GitHub

- ✅ `.env` files are in `.gitignore` (don't push real credentials!)
- ✅ `.env.example` files show what variables are needed
- ✅ Change default admin credentials before deployment
- ✅ Don't share API keys or JWT secrets

## 📚 Detailed Documentation

- **[backend/README.md](backend/README.md)** - API setup, routes, endpoints
- **[frontend/README.md](frontend/README.md)** - Frontend features, pages, styling
- **[admin/README.md](admin/README.md)** - Admin features, dashboard, user management

## 🔧 Tech Stack

**Frontend & Admin:**
- React (UI library)
- Vite (build tool)
- Context API (state management)
- CSS (styling)

**Backend:**
- Node.js (runtime)
- Express (web framework)
- MongoDB (database)
- JWT (authentication)
- Cloudinary (image hosting)
- Razorpay (payments)

## 🎮 Default Login Credentials

**Admin:**
- Email: Check `ADMIN_EMAIL` in backend `.env`
- Password: Check `ADMIN_PASSWORD` in backend `.env`

**Patient/User:**
- Create new account on frontend login page

**Doctor:**
- Created by admin through admin dashboard

## 📦 Installation Command Cheat Sheet

```bash
# Setup all apps at once (run in separate terminals)
Terminal 1: cd backend && npm install && npm start
Terminal 2: cd frontend && npm install && npm run dev
Terminal 3: cd admin && npm install && npm run dev
```

## 🚢 Deployment

**Frontend & Admin:**
```bash
npm run build
# Deploy dist/ folder to Vercel, Netlify, or similar
```

**Backend:**
- Deploy to Heroku, Railway, or similar Node.js hosting
- Set environment variables on hosting platform
- Update `VITE_BACKEND_URL` in frontend/admin to production backend URL

## ❓ Common Issues

| Issue | Solution |
|-------|----------|
| Port already in use | Check if services already running on that port |
| MongoDB connection fails | Verify connection string in `.env` |
| API calls fail | Ensure backend is running & `VITE_BACKEND_URL` is correct |
| Can't login to admin | Verify admin credentials in backend `.env` |

## 📝 Git Workflow

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

✅ All sensitive files (`.env`) are automatically excluded via `.gitignore`

## 📞 Support

For issues or questions:
1. Check the detailed README in each folder
2. Review error messages in terminal/browser console
3. Verify all environment variables are set correctly

---

**Ready to start?** Follow the "Quick Start" section above! 🎉
