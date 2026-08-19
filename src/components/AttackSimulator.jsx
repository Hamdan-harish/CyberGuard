function AttackSimulator({ onBruteForce, onPortScan,onSQLInjection }) {
    return (
    <div className="mt-10">
  
        <div className="mb-5">
          <h2 className="text-xl font-semibold">
            Attack Simulator
          </h2>
  
          <p className="text-sm text-slate-400 mt-1">
            Generate simulated security events for testing.
          </p>
        </div>
  
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Brute Force */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
    
                <div className="flex items-center justify-between">
    
                    <div>
                        <h3 className="font-semibold text-white">
                        Brute Force Attack
                        </h3>
        
                        <p className="text-sm text-slate-400 mt-1">
                        Simulate repeated failed login attempts.
                        </p>
                    </div>
    
                    <button
                        onClick={onBruteForce}
                        className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition"
                    >
                        Simulate
                    </button>
    
                </div>
  
            </div>
  
  
          {/* Port Scan */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
  
            <div className="flex items-center justify-between">
  
              <div>
                <h3 className="font-semibold text-white">
                  Port Scan
                </h3>
  
                <p className="text-sm text-slate-400 mt-1">
                  Simulate probes against multiple ports.
                </p>
              </div>
  
              <button
                onClick={onPortScan}
                className="px-4 py-2 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 hover:bg-yellow-500/20 transition"
              >
                Simulate
              </button>
  
            </div>
  
          </div>

          {/* SQL Injection */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center justify-between">

                <div>
                <h3 className="font-semibold text-white">
                    SQL Injection
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                    Simulate a malicious database request.
                </p>
                </div>

                <button
                onClick={onSQLInjection}
                className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition"
                >
                Simulate
                </button>

                </div>

            </div>
  
        </div>
  
    </div>
    );
  }
  
  export default AttackSimulator;