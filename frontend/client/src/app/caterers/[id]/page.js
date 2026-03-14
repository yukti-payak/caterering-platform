"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CatererDetails() {
  const { id } = useParams();
  const [caterer, setCaterer] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!id) return;
    fetch(`https://caterering-platform.onrender.com/api/caterers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCaterer(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]); 

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafbfc]">
      <div className="flex flex-col items-center gap-6">
        <div className="w-10 h-10 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="text-slate-400 text-[10px] font-black tracking-[0.2em] uppercase">Refining Experience</p>
      </div>
    </div>
  );

  if (!caterer) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafbfc]">
      <div className="text-center bg-white p-12 rounded-[2rem] shadow-xl border border-slate-200">
        <h2 className="text-xl font-black text-slate-900 mb-2">Caterer Not Found</h2>
        <Link href="/caterers" className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold inline-block mt-4">
          ← Back to Directory
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans py-16">
      <main className="max-w-2xl mx-auto px-6">
    
        <div className="mb-6">
          <Link href="/caterers" className="group inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">
            <span className="mr-2 flex items-center justify-center w-6 h-6 bg-white border border-slate-200 rounded-lg shadow-sm group-hover:bg-indigo-50 transition-colors">←</span> 
            Directory
          </Link>
        </div>

    
        <div className="bg-white rounded-[2rem] shadow-sm border-2 border-slate-200 overflow-hidden">
          
          
          <div className="p-8 relative">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1 px-2 py-0.5 bg-amber-50 border border-amber-200 rounded-md">
                  <span className="text-[10px]">⭐</span>
                  <span className="text-[11px] font-black text-amber-700">{caterer.rating}</span>
                </div>
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.15em]">Verified Provider</span>
              </div>

              
              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-2 leading-tight">
                {caterer.name}
              </h1>

              <div className="flex items-center gap-1.5 text-indigo-500 font-bold text-xs">
                <span>📍</span>
                {caterer.location}
              </div>
            </div>
          </div>

          
          <div className="mx-8 mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            
            
            <div className="flex-shrink-0">
              <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-0.5">Price Point</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-900">₹{caterer.pricePerPlate}</span>
                <span className="text-slate-400 text-[10px] font-bold uppercase">/plate</span>
              </div>
            </div>

        
            <div className="hidden sm:block w-px h-10 bg-slate-200"></div>

            
            <div className="flex-1">
              <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-2">Specialties</p>
              <div className="flex flex-wrap gap-1.5">
                {caterer.cuisines.map((c, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-bold text-slate-600"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}