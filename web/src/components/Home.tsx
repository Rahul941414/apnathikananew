import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-brand-100"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Welcome to <span className="text-brand-700">Apna Thikana</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              A modern Indian food ordering experience — fast performance, clean UI, and secure checkout.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/products" className="px-5 py-3 rounded-2xl bg-brand-600 text-white hover:bg-brand-700">Shop Now</Link>
              <Link to="/about" className="px-5 py-3 rounded-2xl bg-white border hover:bg-slate-50">Learn More</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl border bg-white shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-brand-200 rounded-3xl blur-xl opacity-80"></div>
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-brand-300 rounded-3xl blur-xl opacity-80"></div>
          </div>
        </div>
      </section>
    </div>
  );
}