import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51Omf1CC3pyi397sl03jAl6ih9zt1UFjbCby47a6qzypLBkmkhZXKYL87F4H4vkYZHTSXkZTkVURlJDm8L6NGqNfe00xSw8gz3A"
);

const StripeOption1 = ({prodottiPerIlCheckout}) => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems:prodottiPerIlCheckout,
      mode: "payment",
      successUrl: "http://localhost:3000/successo",
      cancelUrl: "http://localhost:3000/errorePagamento",
    });
    if (error) {
      console.error("Something went wrong at the checkout:", error.message);
    }
  };
  return (
    <button
      className="brownish-button px-4 py-2 rounded fw-bold text-white"
      onClick={() => {
        handleClick();
      }}
    >
      acquista
    </button>
  );
};

export default StripeOption1;
