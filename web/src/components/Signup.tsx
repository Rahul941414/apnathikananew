import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try { await signup(fullName, email, phone, password); nav("/"); }
    catch { alert("Signup failed"); }
  };

  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Create Account</h2>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full border px-4 py-2 rounded-xl" placeholder="Full Name" value={fullName} onChange={e=>setFullName(e.target.value)} />
          <input className="w-full border px-4 py-2 rounded-xl" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="w-full border px-4 py-2 rounded-xl" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
          <input type="password" className="w-full border px-4 py-2 rounded-xl" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="w-full bg-brand-600 text-white py-2 rounded-xl">Sign Up</button>
        </form>
      </div>
      <div className="hidden md:block">
        <h3 className="text-2xl font-bold">Join Apna Thikana</h3>
        <p className="text-slate-600 mt-2">Save your details and checkout faster next time.</p>
      </div>
    </div>
  );
}