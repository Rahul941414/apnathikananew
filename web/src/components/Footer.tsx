import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 items-center">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Apna Thikana. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
          <Link to="/privacy" className="hover:text-brand-700">Privacy</Link>
          <Link to="/terms" className="hover:text-brand-700">Terms</Link>
          <Link to="/refund-cancellation" className="hover:text-brand-700">Refund & Cancellation</Link>
          <Link to="/shipping-delivery" className="hover:text-brand-700">Shipping</Link>
        </div>
      </div>
    </footer>
  );
}