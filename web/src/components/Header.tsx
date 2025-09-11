import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, UserRound } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { totalQty } = useCart();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const navLink = "px-3 py-2 rounded-lg hover:bg-slate-100";
  const active = ({ isActive }: any) => (isActive ? "bg-slate-200 " + navLink : navLink);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl tracking-tight">
          <span className="text-brand-700">Apna</span> Thikana
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/products" className={active}>Products</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
          <NavLink to="/cart" className={active}>
            <div className="relative flex items-center gap-2">
              <ShoppingCart size={18}/>
              <span>Cart</span>
              {totalQty > 0 && (
                <span className="absolute -right-2 -top-2 text-xs bg-brand-600 text-white rounded-full px-1.5">{totalQty}</span>
              )}
            </div>
          </NavLink>
          {user ? (
            <div className="ml-2 flex items-center gap-2">
              <span className="text-sm text-slate-700 flex items-center gap-1"><UserRound size={16}/> {user.fullName.split(" ")[0]}</span>
              <button className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm" onClick={()=>{ logout(); nav("/"); }}>Logout</button>
            </div>
          ) : (
            <>
              <NavLink to="/login" className={active}>Login</NavLink>
              <NavLink to="/signup" className={active}>Signup</NavLink>
            </>
          )}
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col p-2">
            <NavLink onClick={()=>setOpen(false)} to="/" className="px-3 py-2 rounded-lg hover:bg-slate-100">Home</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/products" className="px-3 py-2 rounded-lg hover:bg-slate-100">Products</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/about" className="px-3 py-2 rounded-lg hover:bg-slate-100">About</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/contact" className="px-3 py-2 rounded-lg hover:bg-slate-100">Contact</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/cart" className="px-3 py-2 rounded-lg hover:bg-slate-100">Cart</NavLink>
            {user ? <button className="text-left px-3 py-2 rounded-lg hover:bg-slate-100" onClick={()=>{ setOpen(false); logout(); }}>Logout</button> : (<><NavLink onClick={()=>setOpen(false)} to="/login" className="px-3 py-2 rounded-lg hover:bg-slate-100">Login</NavLink><NavLink onClick={()=>setOpen(false)} to="/signup" className="px-3 py-2 rounded-lg hover:bg-slate-100">Signup</NavLink></>)}
          </div>
        </div>
      )}
    </header>
  );
}