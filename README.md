# MERN Payment Gateway Integration with Razorpay

This project demonstrates how to integrate a payment gateway into a MERN (MongoDB, Express.js, React.js, Node.js) stack application using Razorpay.

## Prerequisites

Before running this project, ensure you have the following installed on your system:

- Node.js (with npm)
- MongoDB
- React.js

## Getting Started

1. Clone the repository:

```
git clone https://github.com/your-username/mern-razorpay-payment-gateway.git
```

2. Navigate to the project directory:

```
cd mern-razorpay-payment-gateway
```

3. Install server dependencies:

```
npm install
```

4. Navigate to the client directory and install client dependencies:

```
cd client
npm install
```

5. Navigate back to the root directory:

```
cd ..
```

6. Create a `.env` file in the root directory and add the following environment variables:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Replace `your_mongodb_connection_string`, `your_razorpay_key_id`, and `your_razorpay_key_secret` with your MongoDB connection string and your Razorpay API key ID and secret.

7. Start the server:

```
npm start
```

8. In a separate terminal, navigate to the client directory and start the React development server:

```
cd client
npm start
```

9. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- The application allows users to make payments using Razorpay.
- Users can select items they want to purchase and proceed to checkout.
- Upon checkout, users are redirected to the Razorpay payment gateway to complete the transaction.
- After successful payment, users are redirected back to the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
