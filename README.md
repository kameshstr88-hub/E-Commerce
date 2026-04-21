# SellStack

SellStack is a full-stack e-commerce web application built with React, Vite, Node.js, Express, MongoDB, and Razorpay.

The project allows users to browse products, add them to cart, proceed to checkout, and complete payments using Razorpay.

---

# Features

* User Signup and Login
* Product Collection Page
* Add to Cart
* Increase / Decrease Quantity
* Checkout with Delivery Details
* Razorpay Payment Integration
* Responsive UI
* Cart saved using Local Storage
* Backend API with Express and MongoDB

---

# Tech Stack

## Frontend

* React
* Vite
* React Router DOM
* Axios
* React Toastify
* Lucide React
* CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Razorpay
* dotenv
* Nodemon

---

# Project Structure

```text
SellStack/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/kameshstr88-hub/E-Commerce.git
cd SellStack
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
KEY_SECRET=your_razorpay_secret
```

---

# Razorpay Test Mode

Use Razorpay test credentials while developing:

```env
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
KEY_SECRET=xxxxxxxxxxxxxxxx
```

Test Card:

```text
Card Number: 4111 1111 1111 1111
Expiry: Any future date
CVV: Any 3 digits
OTP: 1234
```

---

# Available Scripts

## Frontend

```bash
npm run dev
npm run build
npm run preview
```

## Backend

```bash
npm run dev
npm start
```

---

# Important Notes

* Do not upload `node_modules` to GitHub.
* Do not upload `.env` files.
* Add a `.gitignore` file with:

```text
node_modules
.env
dist
build
```

---

# Future Improvements

* Product Search
* Wishlist
* Order History
* Admin Dashboard
* Product Reviews
* Payment Verification
* Deploy Frontend and Backend

---

# Author

Created by Kamesh M.
