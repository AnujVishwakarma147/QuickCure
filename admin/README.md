# Prescripto Admin Dashboard

A React + Vite admin dashboard for managing doctors, appointments, and system users in the Prescripto appointment booking system.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Backend server running (see backend README)

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd Prescripto/admin
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Copy the `.env.example` file to `.env`:
```bash
# On Windows
copy .env.example .env

# On Mac/Linux
cp .env.example .env
```

Update the `.env` file with your backend API URL:
```
VITE_BACKEND_URL='http://localhost:5000'
```

## Running the Project

### Development Mode
```bash
npm run dev
```

The admin dashboard will start on `http://localhost:5173` (or next available port)

### Build for Production
```bash
npm run build
```

## Project Structure

```
admin/
├── src/
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   ├── assets/
│   │   └── assets.js        # Asset imports and exports
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   └── Sidebar.jsx      # Sidebar navigation
│   ├── context/
│   │   ├── AdminContext.jsx # Admin state management
│   │   ├── AppContext.jsx   # App-wide context
│   │   └── DoctorContext.jsx# Doctor state management
│   └── pages/
│       ├── Login.jsx        # Admin login page
│       └── Admin/
│           ├── Dashboard.jsx     # Main dashboard
│           ├── AllApointments.jsx# Appointments management
│           ├── AddDoctor.jsx     # Add new doctor
│           └── DoctorsList.jsx   # View all doctors
├── package.json
├── vite.config.js           # Vite configuration
└── index.html
```

## Features

- **Admin Authentication** - Secure login for admin users
- **Doctor Management** - Add, edit, and manage doctors
- **Appointment Management** - View and manage all appointments
- **Dashboard** - Overview of system statistics
- **Responsive Design** - Works on desktop and tablet devices

## Environment Variables

Create a `.env` file in the admin folder:

```
VITE_BACKEND_URL='http://localhost:5000'
```

## Running with Backend

Make sure your backend is running on `http://localhost:5000` before starting the admin dashboard:

```bash
# Terminal 1: Start backend
cd backend
npm start

# Terminal 2: Start admin dashboard
cd admin
npm run dev
```

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

## Default Admin Credentials

Use the credentials from your backend `.env` file to login:
- Email: Check `ADMIN_EMAIL` in backend `.env`
- Password: Check `ADMIN_PASSWORD` in backend `.env`

## Important Notes

- **Never commit sensitive credentials** - Keep backend URLs and API keys secure
- The admin dashboard connects to the backend API for all operations
- Ensure CORS is properly configured on the backend
- Modern browsers are required (Chrome, Firefox, Safari, Edge)

## Troubleshooting

### Dashboard not loading?
1. Verify backend is running on `http://localhost:5000`
2. Check `VITE_BACKEND_URL` in `.env` file
3. Look for CORS errors in browser console

### Login fails?
1. Ensure backend server is running
2. Verify admin credentials in backend `.env`
3. Check network tab in browser developer tools

### Port already in use?
Vite will automatically use the next available port (5174, 5175, etc.)

## Related Projects

- **Frontend** - Patient/user facing application
- **Backend** - API server and business logic

---
**Note**: This is the admin dashboard. Make sure the backend is running before using this application.
