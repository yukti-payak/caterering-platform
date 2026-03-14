import Link from 'next/link';

export default function CatererCard({ caterer }) {
  return (
    <div className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
      
      
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-xl font-bold text-red-900 group-hover:text-red-800 transition-colors">
            {caterer.name}
          </h3>
          <div className="flex items-center bg-amber-50 text-amber-600 px-2.5 py-1 rounded-xl text-xs font-black border border-amber-100 shrink-0">
            <span className="mr-1">★</span> {caterer.rating}
          </div>
        </div>
        
        <p className="text-slate-500 mt-2 text-sm flex items-center gap-1.5 font-medium">
          <span className="text-indigo-400">📍</span> {caterer.location}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {caterer.cuisines.map((item, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-bold rounded-xl border border-slate-100 group-hover:border-indigo-100 group-hover:bg-indigo-50/30 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-slate-50 flex justify-between items-center relative z-10">
        <div>
          <p className="text-[9px] text-slate-400 uppercase font-black tracking-tighter">Starting At</p>
          <p className="text-2xl font-black text-slate-900 tracking-tight">
            ₹{caterer.pricePerPlate}
            <span className="text-xs font-medium text-slate-400 ml-1">/plate</span>
          </p>
        </div>
        
        <Link 
          href={`/caterers/${caterer._id}`} 
          className="bg-red-900 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

