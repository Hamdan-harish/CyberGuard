export function detectBruteForce(events) {

    const failedLoginEvents = events.filter(
      (event) => event.type === 'LOGIN_FAILED'
    );
  
    return failedLoginEvents.length >= 10;
  }

export function detectPortScan(events) {

  const portScanEvents = events.filter(
    (event) => event.type === 'PORT_PROBE'
  );

  const uniquePorts = new Set(
    portScanEvents.map((event) => event.port)
  );

  return uniquePorts.size >= 8;
}

export function detectSQLInjection(events) {

  const sqlPatterns = [
    "' OR '1'='1",
    "UNION SELECT",
    "DROP TABLE",
    "' OR 1=1",
  ];

  return events.some((event) => {

    if (event.type !== 'HTTP_REQUEST') {
      return false;
    }

    const request = event.request.toUpperCase();

    return sqlPatterns.some((pattern) =>
      request.includes(pattern.toUpperCase())
    );

  });
}