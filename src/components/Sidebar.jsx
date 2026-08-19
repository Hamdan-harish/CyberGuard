function Sidebar({ activePage, setActivePage }) {

    const menuItems = [
      { name: 'Dashboard', icon: '▦' },
      { name: 'Alerts', icon: '⚠' },
      { name: 'IP Intelligence', icon: '◎' },
      { name: 'Attack Simulator', icon: '⚡' },
    ];
  
    return (
      <aside className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 p-5 flex flex-col">
  
        {/* Logo */}
        <div className="mb-10 px-2">
  
          <div className="flex items-center gap-3">
  
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              🛡
            </div>
  
            <div>
              <h1 className="text-xl font-bold text-white">
                CyberGuard
              </h1>
  
              <p className="text-[11px] text-slate-500">
                SOC MONITOR
              </p>
            </div>
  
          </div>
  
        </div>
  
  
        {/* Navigation */}
        <div>
  
          <p className="text-[11px] uppercase tracking-wider text-slate-600 px-3 mb-3">
            Monitoring
          </p>
  
          <nav className="flex flex-col gap-1">
  
            {menuItems.map((item) => (
  
              <button
                key={item.name}
                onClick={() => setActivePage(item.name)}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition ${
                  activePage === item.name
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/10'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                }`}
              >
  
                <span className="w-5 text-center">
                  {item.icon}
                </span>
  
                {item.name}
  
              </button>
  
            ))}
  
          </nav>
  
        </div>
  
  
        {/* System Status */}
        <div className="mt-auto">
  
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
  
            <div className="flex items-center gap-2">
  
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
  
              <span className="text-sm text-slate-300">
                System Online
              </span>
  
            </div>
  
            <p className="text-xs text-slate-600 mt-2">
              Detection engine active
            </p>
  
          </div>
  
        </div>
  
      </aside>
    );
  }
  
  export default Sidebar;