function StatCard({ title, value, description, icon }) {
    return (
      <div className="group bg-slate-900/70 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition">
  
        <div className="flex items-start justify-between">
  
          <div>
            <p className="text-sm text-slate-400">
              {title}
            </p>
  
            <p className="text-3xl font-bold text-white mt-2 tracking-tight">
              {value}
            </p>
          </div>
  
          <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-xl">
            {icon}
          </div>
  
        </div>
  
        <div className="flex items-center gap-2 mt-5">
  
          <span className="text-xs text-emerald-400">
            ↑ 12%
          </span>
  
          <span className="text-xs text-slate-500">
            vs last 24 hours
          </span>
  
        </div>
  
      </div>
    );
  }
  
  export default StatCard;