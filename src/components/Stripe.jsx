import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51Omf1CC3pyi397sl03jAl6ih9zt1UFjbCby47a6qzypLBkmkhZXKYL87F4H4vkYZHTSXkZTkVURlJDm8L6NGqNfe00xSw8gz3A"
);

const StripeOption1 = ({ ordine }) => {
  const handleClick = async () => {
    try {
      const stripe = await stripePromise;

      // Effettuo il reindirizzamento al checkout di Stripe utilizzando i dati dell'ordine
      const { error } = await stripe.redirectToCheckout({
        lineItems: ordine.dettagliOrdine.map((dettaglio) => ({
          price: dettaglio.priceId,
          quantity: 1,
        })),
        mode: "payment",
        successUrl: "http://localhost:3000/successo",
        cancelUrl: "http://localhost:3000/errorePagamento",
      });

      if (error) {
        console.error(
          "Si è verificato un errore durante il checkout:",
          error.message
        );
      }
    } catch (error) {
      console.error("Si è verificato un errore:", error.message);
    }
  };
  return (
    <button
      className=" bg-success px-4 py-2 rounded fw-bold text-black"
      onClick={handleClick}
    >
      acquista
    </button>
  );
};

export default StripeOption1;
