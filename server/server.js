const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

const alerts = [
    {
      id: 'alert_001',
      type: 'Brute Force Attack',
      description: '43 failed login attempts detected',
      ip: '185.23.45.10',
      severity: 'CRITICAL',
      time: '2 min ago',
      icon: '🔴',
    },
  
    {
      id: 'alert_002',
      type: 'SQL Injection Attempt',
      description: 'Suspicious SQL query detected',
      ip: '103.45.67.21',
      severity: 'HIGH',
      time: '8 min ago',
      icon: '🟠',
    },
  
    {
      id: 'alert_003',
      type: 'Port Scan Detected',
      description: 'Multiple ports accessed in a short period',
      ip: '45.67.89.12',
      severity: 'MEDIUM',
      time: '15 min ago',
      icon: '🟡',
    },
];

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'CyberGuard backend is running',
  });
});

app.get('/api/alerts', (req, res) => {

    res.json({
      success: true,
      data: alerts,
    });
  
});

app.post('/api/simulate/bruteforce', (req, res) => {

    const ip = '185.23.45.10';
  
    const failedAttempts = 12;
  
    const detected = failedAttempts >= 10;
  
    if (detected) {
  
      const alert = {
        id: `alert_${Date.now()}`,
        type: 'Brute Force Attack',
        description: `${failedAttempts} failed login attempts detected`,
        ip: ip,
        severity: 'CRITICAL',
        time: 'Just now',
        icon: '🔴',
      };
  
      alerts.unshift(alert);
  
      return res.json({
        success: true,
        detected: true,
        alert: alert,
      });
    }
  
    res.json({
      success: true,
      detected: false,
    });
  
});

app.post('/api/simulate/portscan', (req, res) => {

    const ip = '91.204.18.73';
  
    const ports = [21, 22, 23, 25, 53, 80, 443, 3306];
  
    const detected = ports.length >= 5;
  
    if (detected) {
  
      const alert = {
        id: `alert_${Date.now()}`,
        type: 'Port Scan Detected',
        description: `${ports.length} different ports probed`,
        ip: ip,
        severity: 'HIGH',
        time: 'Just now',
        icon: '🟠',
      };
  
      alerts.unshift(alert);
  
      return res.json({
        success: true,
        detected: true,
        alert: alert,
      });
    }
  
    res.json({
      success: true,
      detected: false,
    });
  
});

app.post('/api/simulate/sqlinjection', (req, res) => {

    const ip = '172.16.45.23';
  
    const maliciousRequest =
      "SELECT * FROM users WHERE username='admin' OR '1'='1'";
  
    const detected =
      maliciousRequest.toLowerCase().includes(' or ');
  
    if (detected) {
  
      const alert = {
        id: `alert_${Date.now()}`,
        type: 'SQL Injection Attempt',
        description: 'Malicious SQL query detected',
        ip: ip,
        severity: 'HIGH',
        time: 'Just now',
        icon: '🟠',
      };
  
      alerts.unshift(alert);
  
      return res.json({
        success: true,
        detected: true,
        alert: alert,
      });
    }
  
    res.json({
      success: true,
      detected: false,
    });
  
});

app.listen(PORT, () => {
  console.log(`CyberGuard backend running on port ${PORT}`);
});