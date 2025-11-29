# Food Delivery Website 🍕

A dynamic and responsive food delivery platform designed to enhance the customer experience. This project allows users to navigate menus seamlessly, customize their orders, make secure payments, and track their orders in real-time. Admin users can manage menus and orders efficiently via an intuitive admin panel.

## Live Demo 🌐
[Food Delivery Website](https://food-web-frontend-qxpl.onrender.com/)

## Features 🎯

- **Intuitive User Interface**: Smooth navigation for menus and order customization.
- **Secure Payment Processing**: Integrated with Stripe for safe and reliable transactions.
- **Real-Time Order Tracking**: Users can track their orders live.
- **Admin Panel**: Manage menus and orders with ease.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used 💻

- **Frontend**: React JS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe

## Installation and Setup 🚀

To set up the project locally, follow these steps:

### Prerequisites ✅
- Node.js and npm installed on your system.
- MongoDB instance running locally or a connection string for a cloud MongoDB database.
- Stripe account for payment gateway integration.

### Steps 📂

1. **Clone the Repository**
```bash
https://github.com/<your-username>/food-delivery-website.git
```

2. **Navigate to the Project Directory**
```bash
cd food-delivery-website
```

3. **Install Dependencies**
```bash
npm install
```

4. **Set Up Environment Variables**
Create a `.env` file in the root directory and add the following:
```env
MONGO_URI=<your-mongodb-connection-string>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
PORT=5000
```

5. **Run the Backend Server**
```bash
npm start
```

6. **Navigate to the Frontend Directory**
```bash
cd client
```

7. **Install Frontend Dependencies**
```bash
npm install
```

8. **Start the Frontend Server**
```bash
npm run dev
```

The application will be running at `http://localhost:3000`.

## Folder Structure 📁

```
food-delivery-website/
├── admin/                # Admin panel code
├── backend/              # Backend code
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── uploads/          # File uploads directory
│   ├── .env              # Environment variables
│   ├── package.json      # Backend dependencies
│   └── server.js         # Entry point for the backend server
│
├── frontend/             # Frontend code
│   ├── public/           # Static assets
│   ├── src/              # React components and application logic
│   ├── .eslintrc.cjs     # ESLint configuration
│   ├── .gitignore        # Git ignore file
│   ├── index.html        # Entry point for the frontend
│   ├── package.json      # Frontend dependencies
│   ├── vite.config.js    # Vite configuration
│
└── README.md             # Project documentation
```

## Features Breakdown 🔍

### User Features 🌟
- 🍽️ Browse and search for menu items.
- ✏️ Customize orders with additional preferences.
- 💳 Securely pay using Stripe.
- 📦 Track orders in real-time.

### Admin Features 🛠️
- ➕ Add, edit, and delete menu items.
- 📋 Manage customer orders efficiently.
- 🔄 Update order status in real-time.

## Contributing 🤝

Contributions are welcome! If you'd like to contribute:
- Fork the repository.
- Create a feature branch.
- Commit your changes.
- Submit a pull request.

## Contact 📞
For any inquiries or feedback, feel free to contact me:
- **Email**: [97ravi2002@gmail.com](mailto:97ravi2002@gmail.com)
- **LinkedIn**: [Ravi](https://www.linkedin.com/in/ravi-388a26280/)
- **Portfolio**: [Ravi's Portfolio](https://portfolio-ravi-sd39.onrender.com/)

---

Enjoy exploring the Food Delivery Website! 🍕
