# Prescripto Frontend

A React + Vite patient-facing application for booking doctor appointments and managing prescriptions in the Prescripto system.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Backend server running (see backend README)

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd Prescripto/frontend
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

The frontend will start on `http://localhost:5173` (or next available port)

### Build for Production
```bash
npm run build
```

## Project Structure

```
frontend/
├── src/
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   ├── assets/
│   │   └── assets.js        # Asset imports and exports
│   ├── Component/
│   │   ├── Header.jsx       # Header component
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Banner.jsx       # Hero banner
│   │   ├── SpecialityMenu.jsx    # Doctor specialties filter
│   │   ├── TopDoctors.jsx        # Featured doctors
│   │   ├── RelatedDoctors.jsx    # Related doctors list
│   ├── context/
│   │   └── AppContext.jsx   # App-wide state management
│   └── Pages/
│       ├── Home.jsx         # Home page
│       ├── Doctors.jsx      # Browse all doctors
│       ├── About.jsx        # About page
│       ├── Contact.jsx      # Contact page
│       ├── Login.jsx        # User login
│       ├── Appointment.jsx  # Book appointment
│       ├── MyAppointment.jsx# View my appointments
│       └── MyProfile.jsx    # User profile
├── package.json
├── vite.config.js           # Vite configuration
└── index.html
```

## Features

- **Doctor Browsing** - View all available doctors with filters by speciality
- **Appointment Booking** - Easy-to-use appointment scheduling
- **User Authentication** - Secure login and registration
- **Profile Management** - View and update user profile
- **Appointment History** - Track past and upcoming appointments
- **Responsive Design** - Works seamlessly on all devices

## Environment Variables

Create a `.env` file in the frontend folder:

```
VITE_BACKEND_URL='http://localhost:5000'
```

## Running with Backend

Make sure your backend is running on `http://localhost:5000` before starting the frontend:

```bash
# Terminal 1: Start backend
cd backend
npm start

# Terminal 2: Start frontend
cd frontend
npm run dev
```

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

## Available Pages

- **Home (`/`)** - Landing page with featured doctors and specialties
- **Doctors (`/doctors`)** - Browse and filter doctors by speciality
- **About (`/about`)** - Information about Prescripto
- **Contact (`/contact`)** - Contact us page
- **Login (`/login`)** - User authentication
- **Appointment (`/appointment/:docId`)** - Book appointment with a doctor
- **My Appointments (`/my-appointments`)** - View user's appointments
- **My Profile (`/my-profile`)** - Manage user profile

## Important Notes

- **Never commit sensitive credentials** - Keep API URLs and keys secure
- The frontend connects to the backend API for all operations
- Ensure CORS is properly configured on the backend
- Modern browsers are required (Chrome, Firefox, Safari, Edge)
- User must login to book appointments

## Troubleshooting

### Pages not loading?
1. Verify backend is running on `http://localhost:5000`
2. Check `VITE_BACKEND_URL` in `.env` file
3. Look for CORS errors in browser console

### Login fails?
1. Ensure backend server is running
2. Verify user credentials or create a new account
3. Check network tab in browser developer tools

### Can't book appointment?
1. Make sure you're logged in
2. Verify backend is running
3. Check browser console for errors

### Port already in use?
Vite will automatically use the next available port (5174, 5175, etc.)

## Related Projects

- **Admin Dashboard** - Admin panel for managing doctors and appointments
- **Backend** - API server and business logic

---
**Note**: This is the patient-facing frontend. Make sure the backend is running before using this application.
