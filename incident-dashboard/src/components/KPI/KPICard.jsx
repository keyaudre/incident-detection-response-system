
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

function KPICard({ title, value, trendLabel, change, tone = "flat" }) {
  const toneStyles = {
    up: {
      icon: ArrowUpRight,
      text: "text-emerald-600 dark:text-emerald-400",
      bar: "bg-emerald-500",
      badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
    },
    down: {
      icon: ArrowDownRight,
      text: "text-rose-600 dark:text-rose-400",
      bar: "bg-rose-500",
      badge: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
    },
    flat: {
      icon: ArrowRight,
      text: "text-slate-500 dark:text-slate-300",
      bar: "bg-blue-500",
      badge: "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
    },
  };

  const currentTone = toneStyles[tone] ?? toneStyles.flat;
  const TrendIcon = currentTone.icon;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow transition duration-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-sm text-slate-500 dark:text-slate-400">{title}</h2>
          <p className="mt-2 text-3xl font-bold text-slate-800 dark:text-slate-100">{value}</p>
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${currentTone.badge}`}
        >
          <TrendIcon size={14} />
          {change}
        </span>
      </div>

      <div className={`mt-4 flex items-center gap-2 text-sm font-medium ${currentTone.text}`}>
        <TrendIcon size={16} />
        <span>{trendLabel}</span>
      </div>

      <div className="mt-4 h-1 w-full rounded bg-slate-200 dark:bg-slate-800">
        <div className={`h-1 w-2/3 rounded ${currentTone.bar}`}></div>
      </div>
    </div>
  );
}

export default KPICard;
