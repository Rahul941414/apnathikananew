import React, { useMemo, useState } from "react";
import { products as all, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const { add } = useCart();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<"" | Product["category"]>("");
  const [sort, setSort] = useState<"" | "price-asc" | "price-desc">("");

  const items = useMemo(() => {
    let data = all.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    if (cat) data = data.filter(p => p.category === cat);
    if (sort === "price-asc") data = [...data].sort((a,b)=>a.price-b.price);
    if (sort === "price-desc") data = [...data].sort((a,b)=>b.price-a.price);
    return data;
  }, [query, cat, sort]);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="flex flex-wrap gap-2">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search..." className="px-3 py-2 rounded-xl border bg-white"/>
          <select value={cat} onChange={e=>setCat(e.target.value as any)} className="px-3 py-2 rounded-xl border bg-white">
            <option value="">All Categories</option>
            <option value="biryani">Biryani</option>
            <option value="curries">Curries</option>
            <option value="snacks">Snacks</option>
            <option value="breads">Breads</option>
            <option value="desserts">Desserts</option>
            <option value="beverages">Beverages</option>
          </select>
          <select value={sort} onChange={e=>setSort(e.target.value as any)} className="px-3 py-2 rounded-xl border bg-white">
            <option value="">Sort</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {items.map(p => (
          <div key={p.id} className="card overflow-hidden">
            <img src={p.image} className="w-full h-48 object-cover" alt={p.name} loading="lazy" />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="font-bold">₹{p.price}</span>
              </div>
              <p className="text-sm text-slate-600 mt-2 line-clamp-2">{p.description}</p>
              <button className="mt-4 w-full px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700" onClick={() => add({ id: p.id, name: p.name, price: p.price, image: p.image })}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}