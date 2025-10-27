# 🚌 Bus Booking System

An advanced, full-stack bus booking platform designed with modern technologies and enterprise-grade architecture. This professional solution provides a seamless experience for passengers, operators, and administrators.

## ✨ Features

### Frontend (User Interface)
- **Modern Tech Stack**: React + TypeScript for type-safe, scalable development
- **Stunning UI/UX**: Tailwind CSS + Framer Motion for beautiful, animated interfaces
- **Component Library**: Shadcn UI for consistent, accessible components
- **Responsive Design**: Mobile-first approach for all devices
- **Real-time Updates**: Live seat availability and booking status
- **Interactive Seat Selection**: Visual bus layout with seat picking
- **Route Search & Filtering**: Advanced search with multiple filters
- **Booking History**: User dashboard with trip management

### Backend (Server & API)
- **Robust API**: Node.js + Express.js RESTful architecture
- **Database**: MongoDB with Mongoose ODM for scalable data management
- **Authentication & Authorization**: JWT-based secure user sessions
- **Payment Integration**: Support for multiple payment gateways (Stripe, Razorpay, etc.)
- **Email Notifications**: Automated booking confirmations and reminders
- **SMS Integration**: Real-time updates via SMS
- **Rate Limiting**: API protection and abuse prevention
- **Data Validation**: Comprehensive input validation and sanitization

### Admin Dashboard
- **Bus Fleet Management**: Add, edit, and manage bus inventory
- **Route Management**: Create and optimize bus routes
- **Schedule Management**: Dynamic scheduling with conflict detection
- **Booking Management**: View, modify, and cancel bookings
- **User Management**: Customer and operator account administration
- **Analytics & Reports**: Revenue tracking, occupancy rates, popular routes
- **Real-time Monitoring**: Live dashboard with key metrics

### Advanced Features
- **Dynamic Pricing**: Peak hours and demand-based pricing algorithms
- **Multi-language Support**: Internationalization (i18n) ready
- **Geolocation Services**: GPS tracking and location-based features
- **Review & Rating System**: Customer feedback and operator ratings
- **Promo Codes & Discounts**: Flexible coupon management system
- **Cancellation & Refunds**: Automated refund processing
- **PDF Ticket Generation**: Digital tickets with QR codes
- **Push Notifications**: Real-time alerts for users

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Static typing for better code quality
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Advanced animations and transitions
- **Shadcn UI**: High-quality component library
- **React Router**: Client-side routing
- **Axios/React Query**: Data fetching and state management
- **Zustand/Redux**: Global state management
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **JWT**: JSON Web Tokens for authentication
- **Bcrypt**: Password hashing
- **Nodemailer**: Email service
- **Stripe/Razorpay**: Payment processing
- **Express Validator**: Input validation
- **Multer**: File upload handling
- **Socket.io**: Real-time communication

### DevOps & Tools
- **Git**: Version control
- **Docker**: Containerization
- **Jest/Vitest**: Testing framework
- **ESLint + Prettier**: Code formatting and linting
- **Husky**: Git hooks
- **GitHub Actions**: CI/CD pipeline

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn or pnpm
- Git

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/arpancodez/bus-booking-system.git

# Navigate to project directory
cd bus-booking-system

# Install dependencies for both frontend and backend
npm run install:all
```

### Environment Setup

Create `.env` files in both frontend and backend directories:

**Backend .env:**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
CLIENT_URL=http://localhost:3000
```

**Frontend .env:**
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Running the Application

```bash
# Run both frontend and backend concurrently
npm run dev

# Or run them separately:
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📂 Project Structure

```
bus-booking-system/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── services/
│   │   ├── store/
│   │   ├── types/
│   │   └── App.tsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── utils/
│   │   ├── config/
│   │   └── server.js
│   └── package.json
└── README.md
```

## 🎯 Key Modules

### User Module
- Registration & Login
- Profile Management
- Booking History
- Wallet & Transactions

### Bus Module
- Bus Fleet Management
- Seat Configuration
- Amenities Management
- Operator Details

### Route Module
- Route Creation & Management
- Stop Management
- Distance & Duration Calculation
- Fare Configuration

### Booking Module
- Seat Selection
- Payment Processing
- Ticket Generation
- Cancellation & Refunds

### Admin Module
- Dashboard Analytics
- User Management
- Content Management
- System Configuration

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- HTTP-only cookies
- CORS configuration
- Rate limiting
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF protection

## 📊 API Documentation

Detailed API documentation will be available at `/api/docs` once the server is running (using Swagger/OpenAPI).

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 🚢 Deployment

### Frontend Deployment
- Vercel (Recommended)
- Netlify
- AWS S3 + CloudFront

### Backend Deployment
- Heroku
- AWS EC2 / ECS
- DigitalOcean
- Railway

### Database Hosting
- MongoDB Atlas (Recommended)
- AWS DocumentDB
- Self-hosted MongoDB

## 📈 Future Enhancements

- [ ] Mobile applications (React Native)
- [ ] AI-powered route optimization
- [ ] Multi-currency support
- [ ] Loyalty program integration
- [ ] Social media login
- [ ] Live chat support
- [ ] Blockchain-based ticketing
- [ ] Carbon footprint tracking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Arpan** - *Initial work* - [arpancodez](https://github.com/arpancodez)

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS team for the amazing framework
- MongoDB team for the powerful database
- All open-source contributors

## 📞 Support

For support, email support@busbooking.com or join our Slack channel.

---

⭐️ If you found this project helpful, please consider giving it a star!

Made with ❤️ by Arpan
