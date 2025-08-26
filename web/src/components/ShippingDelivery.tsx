import React from "react";

export default function ShippingDelivery() {
  return (
    <div className="container mx-auto px-4 py-10 prose max-w-none">
      <h1>Same Day Delivery</h1>
      <p>
        At <strong>Apna Thikana</strong>, we ensure your food is delivered fresh and fast.
        Our <strong>Same Day Delivery</strong> service is available in selected cities and pincodes.
      </p>

      <h2>Delivery Timelines</h2>
      <p>
        Orders placed <strong>before 12:00 PM</strong> will be delivered the same day by evening.
        Orders placed after 12:00 PM will be delivered the next day.
      </p>

      <h2>Charges</h2>
      <p>
        An additional <strong>₹49</strong> fee applies for Same Day Delivery (may vary based on location and order size).
      </p>

      <h2>Damaged / Tampered Packages</h2>
      <p>
        If your package appears tampered or damaged, please do not accept the delivery and contact our support team immediately.
      </p>
    </div>
  );
}
