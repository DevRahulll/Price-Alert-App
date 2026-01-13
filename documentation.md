# Price Alert App Documentation

## Project Overview

The Price Alert App is a full-stack web application designed to help users monitor product prices and receive notifications when prices drop below their specified thresholds. The application enables users to set up price alerts for various products and get notified when their target prices are met.

## Architecture

### Technology Stack

**Backend (API)**
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Environment Management**: dotenv
- **Development**: Nodemon for hot reloading

**Frontend (Client)**
- **Framework**: React 19.2.0
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)
- **Styling**: CSS
- **Linting**: ESLint

### Project Structure

```
Price-Alert-App/
├── api/                          # Backend API server
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js            # Database connection configuration
│   │   └── models/
│   │       └── user.js          # User data model
│   ├── .env                     # Environment variables
│   ├── app.js                   # Main server file
│   └── package.json             # Backend dependencies
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── assets/              # Static assets
│   │   ├── App.jsx              # Main React component
│   │   ├── main.jsx             # React entry point
│   │   └── *.css                # Styling files
│   ├── index.html               # HTML template
│   └── package.json             # Frontend dependencies
└── documentation.md             # This file
```

## Features (Planned)

### Core Functionality
- **User Authentication**: Registration and login system
- **Product Monitoring**: Add products to watchlist with target prices
- **Price Tracking**: Automated price checking from various sources
- **Alert System**: Email/SMS notifications when target prices are reached
- **Dashboard**: User-friendly interface to manage alerts and view price history

### User Management
- User registration with email verification
- Secure login/logout functionality
- Profile management (name, email, mobile number)
- Password reset functionality

## Database Schema

### User Model
```javascript
{
  firstName: String (required),
  lastName: String (optional),
  email: String (required, unique),
  password: String (required, hashed),
  mobileNumber: Number (required)
}
```

## API Endpoints (Planned)

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Password reset

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `DELETE /api/users/account` - Delete user account

### Price Alerts
- `GET /api/alerts` - Get user's price alerts
- `POST /api/alerts` - Create new price alert
- `PUT /api/alerts/:id` - Update price alert
- `DELETE /api/alerts/:id` - Delete price alert

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup

1. Navigate to the API directory:
   ```bash
   cd api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   ```bash
   # Create .env file with:
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Development Guidelines

### Code Standards
- Use ES6+ features and modern JavaScript syntax
- Follow React best practices and hooks patterns
- Implement proper error handling and validation
- Use meaningful variable and function names
- Add comments for complex logic

### Git Workflow
- Create feature branches for new functionality
- Use descriptive commit messages
- Test thoroughly before merging
- Keep commits atomic and focused

### Security Considerations
- Hash passwords before storing in database
- Implement JWT token authentication
- Validate all user inputs
- Use HTTPS in production
- Sanitize data to prevent injection attacks

## Environment Configuration

### Development
- API Server: `http://localhost:3000`
- Client Server: `http://localhost:5173` (Vite default)
- Database: Local MongoDB or MongoDB Atlas

### Production (Planned)
- Deploy API to cloud service (AWS, Heroku, etc.)
- Deploy client to CDN or static hosting
- Use production MongoDB cluster
- Implement proper logging and monitoring

## Testing Strategy

### Backend Testing
- Unit tests for models and utilities
- Integration tests for API endpoints
- Database connection and query testing

### Frontend Testing
- Component unit tests with React Testing Library
- Integration tests for user workflows
- End-to-end testing with Cypress or Playwright

## Deployment

### Backend Deployment
1. Set production environment variables
2. Build and optimize the application
3. Deploy to cloud platform
4. Configure database connections
5. Set up monitoring and logging

### Frontend Deployment
1. Build the React application: `npm run build`
2. Deploy static files to hosting service
3. Configure environment variables for API endpoints
4. Set up CDN for optimal performance

## Future Enhancements

- **Mobile App**: React Native or Flutter implementation
- **Advanced Analytics**: Price trend analysis and predictions
- **Multiple Retailers**: Support for various e-commerce platforms
- **Social Features**: Share alerts and recommendations
- **API Integration**: Third-party price comparison services
- **Notification Channels**: Push notifications, Slack, Discord integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request with detailed description

## License

This project is licensed under the ISC License.

## Support

For questions or issues, please create an issue in the project repository or contact the development team.

---

**Last Updated**: January 2025
**Version**: 1.0.0 (Initial Development)