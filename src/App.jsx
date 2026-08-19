import {useState} from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import SecurityEvent from './components/SecurityEvent';
import AttackSimulator from './components/AttackSimulator';
import IPIntelligence from './components/IPIntelligence';
import {detectBruteForce,detectPortScan,
        detectSQLInjection
} from './services/detectionEngine';


const securityEvents = [
  {
    id: 'evt_001',
    type: 'Brute Force Attack',
    description: '43 failed login attempts detected',
    ip: '185.23.45.10',
    time: '2 min ago',
    severity: 'CRITICAL',
    icon: '🔴',
  },

  {
    id: 'evt_002',
    type: 'SQL Injection Attempt',
    description: 'Suspicious SQL query detected',
    ip: '103.45.67.21',
    time: '8 min ago',
    severity: 'HIGH',
    icon: '🟠',
  },

  {
    id: 'evt_003',
    type: 'Port Scan Detected',
    description: 'Multiple ports accessed in a short period',
    ip: '45.67.89.12',
    time: '15 min ago',
    severity: 'MEDIUM',
    icon: '🟡',
  },
];

function App() {
  const [events,setEvents]=useState(securityEvents);
  const [activePage, setActivePage] = useState('Dashboard');

  const criticalAlerts = events.filter(
    (event) => event.severity === 'CRITICAL'
  ).length;

  let threatLevel = 'LOW';
  if (criticalAlerts >= 3) {
    threatLevel = 'CRITICAL';
  } else if (criticalAlerts >= 2) {
    threatLevel = 'HIGH';
  } else if (criticalAlerts >= 1) {
    threatLevel = 'MEDIUM';
  }

  const suspiciousIPs = new Set(
    events.map((event) => event.ip)
  ).size;
  

  const simulateBruteForce = () => {

    const ip = '185.23.45.10';
  
    const failedAttempts=12;
  
    const newLoginEvents=[];
  
    for (let i=0;i<failedAttempts;i++) {
  
      newLoginEvents.push({
        id: `login_${Date.now()}_${i}`,
        type: 'LOGIN_FAILED',
        description: 'Failed login attempt',
        ip: ip,
        time: 'Just now',
        severity: 'LOW',
        icon: '🔵',
      });
  
    }
  
    console.log('Generated login events:', newLoginEvents);
  
    const bruteForceDetected = detectBruteForce(newLoginEvents);
  
    console.log('Brute force detected:', bruteForceDetected);

    if (bruteForceDetected) {

      const alert = {
        id: `alert_${Date.now()}`,
        type: 'Brute Force Attack',
        description: `${failedAttempts} failed login attempts detected`,
        ip: ip,
        time: 'Just now',
        severity: 'CRITICAL',
        icon: '🔴',
      };
    
      setEvents((currentEvents) => [
        alert,
        ...currentEvents,
      ]);
    }
  
  };

  const simulatePortScan = () => {

    const ip = '91.204.18.73';
  
    const ports = [21, 22, 23, 25, 53, 80, 443, 3306];
  
    const portScanEvents = ports.map((port, index) => ({
      id: `port_${Date.now()}_${index}`,
      type: 'PORT_PROBE',
      description: `Port ${port} probed`,
      ip: ip,
      port: port,
      time: 'Just now',
      severity: 'LOW',
      icon: '🔵',
    }));
  
    console.log('Generated port scan events:', portScanEvents);
  
    const portScanDetected = detectPortScan(portScanEvents);
  
    console.log('Port scan detected:', portScanDetected);
  
    if (portScanDetected) {
  
      const alert = {
        id: `alert_${Date.now()}`,
        type: 'Port Scan Detected',
        description: `${ports.length} different ports probed`,
        ip: ip,
        time: 'Just now',
        severity: 'HIGH',
        icon: '🟠',
      };
  
      setEvents((currentEvents) => [
        alert,
        ...currentEvents,
      ]);
    }
  
  };

  const simulateSQLInjection = () => {

    const ip = '172.16.45.23';
  
    const maliciousRequest =
      "SELECT * FROM users WHERE username='admin' OR '1'='1'";
  
    const sqlEvent = {
      id: `sql_${Date.now()}`,
      type: 'HTTP_REQUEST',
      description: 'Suspicious SQL query detected',
      ip: ip,
      request: maliciousRequest,
      time: 'Just now',
      severity: 'LOW',
      icon: '🔵',
    };
  
    console.log('Generated HTTP request:', sqlEvent);
  
    const sqlInjectionDetected = detectSQLInjection([sqlEvent]);
  
    console.log(
      'SQL injection detected:',
      sqlInjectionDetected
    );
  
    if (sqlInjectionDetected) {
  
      const alert = {
        id: `alert_${Date.now()}`,
        type: 'SQL Injection Attempt',
        description: 'Malicious SQL query detected',
        ip: ip,
        time: 'Just now',
        severity: 'HIGH',
        icon: '🟠',
      };
  
      setEvents((currentEvents) => [
        alert,
        ...currentEvents,
      ]);
    }
  };
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      <Sidebar 
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-1 p-8">

        {/* Page Header */}
        {activePage === 'Attack Simulator' && (
        <AttackSimulator
          onBruteForce={simulateBruteForce}
          onPortScan={simulatePortScan}
          onSQLInjection={simulateSQLInjection}
        />
        )}

        {activePage === 'IP Intelligence' && (
          <IPIntelligence events={events} />
        )}
        
        {activePage === 'Dashboard' && (
          <>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Security Overview
                </h2>

                <p className="text-slate-400 mt-2">
                  Monitor security events and potential threats
                </p>
              </div>

              <div className="flex items-center gap-4">

                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  System Online
                </div>

                <button className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 transition">
                  ↻ Refresh
                </button>

              </div>

            </div>
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

              <StatCard
                title="Total Events"
                value={events.length}
                description="Events recorded today"
                icon="📊"
              />

              <StatCard
                title="Suspicious IPs"
                value={suspiciousIPs}
                description="Unique suspicious sources"
                icon="🌐"
              />

              <StatCard
                title="Critical Alerts"
                value={criticalAlerts}
                description="Require immediate attention"
                icon="🚨"
              />

              <StatCard
                title="Threat Level"
                value={threatLevel}
                description="Current security status"
                icon="⚠️"
              />

            </div>

          {/* Recent Security Events */}
          <div className="mt-10">

            <h2 className="text-xl font-semibold mb-4">
              Recent Security Events
            </h2>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

              {events.map((event) => (
                <SecurityEvent
                  key={event.id}
                  type={event.type}
                  description={event.description}
                  ip={event.ip}
                  time={event.time}
                  severity={event.severity}
                  icon={event.icon}
                />
              ))}

            </div>

          </div>
        </>
        )}

        {activePage === 'Alerts' && (
          <div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold">
                Security Alerts
              </h2>

              <p className="text-slate-400 mt-2">
                Review detected security threats and incidents
              </p>
            </div>

            <div className="space-y-4">

              {events.map((event) => (

                <div
                  key={event.id}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <span className="text-xl">
                        {event.icon}
                      </span>

                      <div>

                        <h3 className="font-semibold text-white">
                          {event.type}
                        </h3>

                        <p className="text-sm text-slate-400 mt-1">
                          {event.description}
                        </p>

                      </div>

                    </div>

                    <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                      {event.severity}
                    </span>

                  </div>

                  <div className="mt-4 text-sm text-slate-500">

                    IP: {event.ip}
                    <span className="mx-2">•</span>
                    {event.time}

                  </div>

                </div>

              ))}

            </div>

          </div>
        )}

      </main>
      

    </div>
    
  );
}

export default App;