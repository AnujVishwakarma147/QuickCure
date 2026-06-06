# 🚀 Complete Setup Guide

Follow this guide step-by-step to get the entire Prescripto project running on your machine.

## ✅ Prerequisites Checklist

Before starting, ensure you have:

- [ ] Node.js v14 or higher installed (`node --version`)
- [ ] npm or yarn installed (`npm --version`)
- [ ] Git installed and configured
- [ ] A MongoDB Atlas account (free tier available)
- [ ] A Cloudinary account (free tier available)
- [ ] A Razorpay account (test mode available)

If any are missing, install them first.

---

## 📥 Step 1: Clone & Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd Prescripto

# Verify the folder structure
dir
# You should see: admin/, backend/, frontend/, README.md
```

---

## 🔧 Step 2: Configure Backend (API Server)

### 2.1 Navigate to Backend
```bash
cd backend
npm install
```

### 2.2 Create Environment File
```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

### 2.3 Fill in `.env` File

Open `backend/.env` and add your actual credentials:

**MongoDB Setup:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster (free tier)
3. Get your connection string
4. Paste in `MONGODB_URI`

**Cloudinary Setup:**
1. Go to [Cloudinary](https://cloudinary.com)
2. Sign up (free account)
3. Find credentials in dashboard
4. Fill in `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_SECRET_KEY`

**Razorpay Setup:**
1. Go to [Razorpay](https://razorpay.com)
2. Sign up and enable test mode
3. Copy test keys
4. Fill in `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`

**Other Settings:**
- `ADMIN_EMAIL`: admin@prescripto.com (or your email)
- `ADMIN_PASSWORD`: Choose a strong password
- `JWT_SECRET`: Generate any random string (e.g., "mySecretKey123")
- `CURRENCY`: INR (or your currency code)

### 2.4 Start Backend
```bash
npm start
```

✅ You should see: `Server running on port 5000`

---

## 🎨 Step 3: Configure Frontend (Patient App)

### 3.1 Open New Terminal & Navigate
```bash
# In a NEW terminal
cd frontend
npm install
```

### 3.2 Create Environment File
```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

### 3.3 Verify Backend URL
Open `frontend/.env` and make sure:
```
VITE_BACKEND_URL='http://localhost:5000'
```

### 3.4 Start Frontend
```bash
npm run dev
```

✅ You should see: `Local: http://localhost:5173`

---

## 👨‍💼 Step 4: Configure Admin Dashboard

### 4.1 Open Another New Terminal & Navigate
```bash
# In a THIRD terminal
cd admin
npm install
```

### 4.2 Create Environment File
```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

### 4.3 Verify Backend URL
Open `admin/.env` and make sure:
```
VITE_BACKEND_URL='http://localhost:5000'
```

### 4.4 Start Admin Dashboard
```bash
npm run dev
```

✅ You should see: `Local: http://localhost:5174` (or next available port)

---

## 🎉 All Set! You Now Have:

| App | URL | Purpose |
|-----|-----|---------|
| **Frontend** | http://localhost:5173 | Patient booking app |
| **Admin** | http://localhost:5174 | Admin management |
| **Backend API** | http://localhost:5000 | Server running in background |

---

## 🧪 Testing the Setup

### 1. Test Frontend
- Go to http://localhost:5173
- Click "Sign Up" or "Login"
- Create a new account
- Browse doctors and test features

### 2. Test Admin
- Go to http://localhost:5174
- Login with credentials from backend `.env`
  - Email: `ADMIN_EMAIL` value
  - Password: `ADMIN_PASSWORD` value
- View dashboard and manage doctors

### 3. Test Backend
- Open browser console (F12)
- Visit any page and check Network tab
- API calls should show in console

---

## ⚠️ Troubleshooting

### Issue: "Port 5000 already in use"
**Solution:** Kill the process using port 5000
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### Issue: "Cannot connect to MongoDB"
**Solution:** 
- Check MongoDB URI in `.env`
- Verify MongoDB Atlas is running
- Ensure your IP is whitelisted in MongoDB Atlas
- Check internet connection

### Issue: "Cloudinary API not working"
**Solution:**
- Verify API key and secret in `.env`
- Check Cloudinary dashboard for active keys
- Ensure account is not suspended

### Issue: "Login not working"
**Solution:**
- Verify backend is running (`npm start` running in background)
- Check credentials in backend `.env`
- Look for errors in browser console (F12)
- Check backend terminal for server errors

### Issue: "CORS Error"
**Solution:**
- Ensure backend is running
- Verify `VITE_BACKEND_URL` matches backend URL
- Check backend CORS configuration

---

## 📁 Folder Guide After Setup

```
Prescripto/
├── frontend/
│   ├── node_modules/        ← Dependencies (don't commit)
│   ├── .env                 ← YOUR API URL (don't commit)
│   ├── .env.example         ← Template (commit this)
│   └── src/                 ← Code here
├── admin/
│   ├── node_modules/        ← Dependencies (don't commit)
│   ├── .env                 ← YOUR API URL (don't commit)
│   ├── .env.example         ← Template (commit this)
│   └── src/                 ← Code here
└── backend/
    ├── node_modules/        ← Dependencies (don't commit)
    ├── .env                 ← YOUR CREDENTIALS (don't commit)
    ├── .env.example         ← Template (commit this)
    └── server.js            ← Main server file
```

---

## 🔐 Security Checklist Before Pushing to GitHub

- [ ] `.env` files are in `.gitignore` (they won't be committed)
- [ ] Never push actual API keys or passwords
- [ ] Always use `.env.example` as template
- [ ] Change default admin credentials
- [ ] Keep MongoDB URI private
- [ ] Keep JWT secret safe

---

## 🚀 Next Steps

1. **Explore the Code:** Check each folder's README.md
2. **Make Changes:** Edit code and see live updates (hot reload)
3. **Add Features:** Build upon the existing structure
4. **Deploy:** Follow deployment guides in each folder's README
5. **Push to GitHub:** Your `.env` files stay safe!

---

## 📚 Additional Resources

- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Cloudinary Docs](https://cloudinary.com/documentation)
- [Razorpay Docs](https://razorpay.com/docs/)
- [React Documentation](https://react.dev)
- [Express Documentation](https://expressjs.com)

---

## ❓ Common Questions

**Q: Can I run all 3 apps on the same machine?**
A: Yes! Just open 3 terminals and run each app in its own terminal.

**Q: Do I need to pay for MongoDB/Cloudinary/Razorpay?**
A: No! Free tiers are available for development.

**Q: Can I use different ports?**
A: Yes, but update `VITE_BACKEND_URL` accordingly.

**Q: What if I forget to setup .env?**
A: The apps won't work. You'll get connection errors.

**Q: Can I commit .env files?**
A: NO! They contain credentials. Always use `.env.example` instead.

---

**You're all set! Start developing! 🎉**
