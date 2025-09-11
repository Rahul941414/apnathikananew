import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try { await login(email, password); nav("/"); }
    catch { alert("Invalid credentials"); }
  };

  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full border px-4 py-2 rounded-xl" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" className="w-full border px-4 py-2 rounded-xl" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="w-full bg-brand-600 text-white py-2 rounded-xl">Login</button>
        </form>
      </div>
      <div className="hidden md:block">
        <h3 className="text-2xl font-bold">Welcome back to Apna Thikana</h3>
        <p className="text-slate-600 mt-2">Secure access to your account and a better shopping experience.</p>
      </div>
    </div>
  );
}