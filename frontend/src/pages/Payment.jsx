import React, { useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { ShieldCheck, CreditCard } from "lucide-react";
import "./Payment.css";

const Payment = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        {
          amount: total,
        }
      );

      const options = {
        key: "rzp_test_SXsxWNm5Iy6B18",
        amount: response.data.order.amount,
        currency: response.data.order.currency,
        order_id: response.data.order.id,
        name: "SellStack",
        description: "Product Payment",
        handler: function (paymentResponse) {
          alert("Payment Successful 🎉");

          console.log(paymentResponse);

          localStorage.removeItem("cartItems");

          window.location.href = "/";
        },
        prefill: {
          name: "Customer",
          email: "customer@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#111111",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.log(error);
      alert("Payment Failed");
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <div className="payment-header">
          <ShieldCheck size={48} />
          <h1>Secure Payment</h1>
          <p>Your payment is protected with Razorpay encryption</p>
        </div>

        <div className="payment-summary">
          <div>
            <span>Total Amount</span>
            <h2>₹{total}</h2>
          </div>

          <div className="payment-method">
            <CreditCard size={22} />
            <span>Razorpay • UPI • Cards • Net Banking</span>
          </div>
        </div>

        <button className="pay-btn" onClick={handlePayment}>
          Pay ₹{total}
        </button>
      </div>
    </div>
  );
};

export default Payment;