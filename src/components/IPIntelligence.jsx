import { useState } from 'react';

function IPIntelligence({ events }) {

  const [ip, setIp] = useState('');
  const [result, setResult] = useState(null);

  const investigateIP = () => {

    if (!ip.trim()) {
      return;
    }

    const matchingEvents = events.filter(
      (event) => event.ip === ip.trim()
    );

    const riskScore = Math.min(
      100,
      matchingEvents.length * 25 + 20
    );

    setResult({
      ip: ip.trim(),
      riskScore: riskScore,
      reputation: riskScore >= 70 ? 'Suspicious' : 'Low Risk',
      threats: matchingEvents.length,
      location: 'Unknown',
    });
  };

  return (
    <div>

      {/* Header */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold">
          IP Intelligence
        </h2>

        <p className="text-slate-400 mt-2">
          Investigate suspicious IP addresses
        </p>

      </div>


      {/* Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

        <div className="flex gap-3">

          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Enter IP address..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-slate-500"
          />

          <button
            onClick={investigateIP}
            className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Investigate
          </button>

        </div>

      </div>


      {/* Results */}
      {result && (

        <div className="mt-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

              <p className="text-sm text-slate-400">
                Risk Score
              </p>

              <p className="text-3xl font-bold mt-2">
                {result.riskScore}/100
              </p>

            </div>


            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

              <p className="text-sm text-slate-400">
                Reputation
              </p>

              <p className="text-2xl font-bold mt-2 text-red-400">
                {result.reputation}
              </p>

            </div>


            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

              <p className="text-sm text-slate-400">
                Detected Threats
              </p>

              <p className="text-3xl font-bold mt-2">
                {result.threats}
              </p>

            </div>

          </div>


          {/* IP Details */}
          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="font-semibold text-lg">
              IP Details
            </h3>

            <div className="grid grid-cols-2 gap-5 mt-5">

              <div>
                <p className="text-sm text-slate-500">
                  IP Address
                </p>

                <p className="text-white mt-1">
                  {result.ip}
                </p>
              </div>


              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>

                <p className="text-white mt-1">
                  {result.location}
                </p>
              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default IPIntelligence;