function SecurityEvent({
  type,
  description,
  ip,
  time,
  severity,
  icon,
}) {

  const severityStyles = {
    CRITICAL: {
      badge: 'bg-red-500/10 text-red-400 border-red-500/20',
      dot: 'bg-red-400',
    },

    HIGH: {
      badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      dot: 'bg-orange-400',
    },

    MEDIUM: {
      badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      dot: 'bg-yellow-400',
    },

    LOW: {
      badge: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
      dot: 'bg-slate-400',
    },
  };

  const style = severityStyles[severity] || severityStyles.LOW;

  return (
    <div className="px-6 py-5 border-b border-slate-800 last:border-b-0 hover:bg-slate-800/40 transition">

      <div className="flex items-center justify-between gap-5">

        {/* Event information */}
        <div className="flex items-center gap-4">

          <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
            <span className="text-lg">
              {icon}
            </span>
          </div>

          <div>

            <h3 className="font-medium text-white">
              {type}
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              {description}
            </p>

          </div>

        </div>


        {/* Event metadata */}
        <div className="flex items-center gap-6">

          <div className="hidden md:block text-right">

            <p className="text-xs text-slate-500">
              Source IP
            </p>

            <p className="text-sm text-slate-300 mt-1 font-mono">
              {ip}
            </p>

          </div>


          <div className="hidden sm:block text-right">

            <p className="text-xs text-slate-500">
              Time
            </p>

            <p className="text-sm text-slate-400 mt-1">
              {time}
            </p>

          </div>


          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium ${style.badge}`}
          >

            <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`}></span>

            {severity}

          </div>

        </div>

      </div>

    </div>
  );
}

export default SecurityEvent;