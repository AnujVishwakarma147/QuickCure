# Prescripto Backend

A Node.js/Express backend for the Prescripto - a comprehensive doctor appointment and prescription management system.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account
- Cloudinary account (for image uploads)
- Razorpay account (for payments)

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd Prescripto/backend
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

Update the `.env` file with your actual credentials:
```
MONGODB_URI='your_mongodb_connection_string'
CLOUDINARY_NAME='your_cloudinary_name'
CLOUDINARY_API_KEY='your_cloudinary_api_key'
CLOUDINARY_SECRET_KEY='your_cloudinary_secret_key'
ADMIN_EMAIL='your_admin_email'
ADMIN_PASSWORD='your_secure_password'
JWT_SECRET='your_jwt_secret_key'
RAZORPAY_KEY_ID='your_razorpay_key_id'
RAZORPAY_KEY_SECRET='your_razorpay_key_secret'
CURRENCY='INR'
```

## Running the Project

### Development Mode
```bash
npm start
```

The server will start on `http://localhost:5000` (or your configured port)

## Project Structure

```
backend/
├── config/
│   ├── cloudinary.js      # Cloudinary configuration
│   └── mongodb.js         # MongoDB connection
├── controllers/
│   ├── adminController.js  # Admin endpoints
│   ├── doctorController.js # Doctor endpoints
│   └── userController.js   # User endpoints
├── middlewares/
│   ├── authAdmin.js       # Admin authentication
│   ├── authDoctor.js      # Doctor authentication
│   ├── authUser.js        # User authentication
│   └── multer.js          # File upload middleware
├── models/
│   ├── appointmentModel.js # Appointment schema
│   ├── doctorModel.js      # Doctor schema
│   └── userModel.js        # User schema
├── routes/
│   ├── adminRoute.js      # Admin routes
│   ├── doctorRoute.js     # Doctor routes
│   └── userRoute.js       # User routes
├── server.js              # Main server file
├── .env.example           # Environment variables template
└── package.json
```

## API Routes

### Admin Routes
- `POST /api/admin/login` - Admin login
- `GET /api/admin/dashboard` - Get admin dashboard data

### Doctor Routes
- `POST /api/doctor/register` - Doctor registration
- `POST /api/doctor/login` - Doctor login
- `GET /api/doctor/appointments` - Get doctor's appointments

### User Routes
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/appointments` - Get user's appointments

## Important Notes

- **Never commit the `.env` file** - It contains sensitive credentials
- Always use `.env.example` as a template for new developers
- Keep JWT_SECRET and admin credentials secure
- Update Razorpay and Cloudinary credentials for production

## Troubleshooting

If you encounter issues:
1. Ensure MongoDB URI is correct
2. Verify Cloudinary and Razorpay credentials
3. Check that all required environment variables are set
4. Review server logs for detailed error messages

## Support

For issues or questions, please create an issue in the repository.

---
**Note**: This is a backend API. Make sure to also set up the frontend and admin applications.
