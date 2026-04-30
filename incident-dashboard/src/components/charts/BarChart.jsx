import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function BarChartComponent({ incidents = [], theme = "light" }) {
  const axisColor = theme === "dark" ? "#94a3b8" : "#64748b";
  const tooltipStyle =
    theme === "dark"
      ? { backgroundColor: "#0f172a", border: "1px solid #334155", color: "#f8fafc" }
      : { backgroundColor: "#ffffff", border: "1px solid #e2e8f0", color: "#0f172a" };

  const grouped = {};

  incidents.forEach((incident) => {
    const date = incident.detected_at;

    if (!grouped[date]) {
      grouped[date] = { created: 0, closed: 0 };
    }

    grouped[date].created++;

    if (incident.status === "Closed" || incident.status === "Resolved") {
      grouped[date].closed++;
    }
  });

  const data = Object.keys(grouped).map(date => ({
    date,
    created: grouped[date].created,
    closed: grouped[date].closed
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="date" tick={{ fill: axisColor, fontSize: 12 }} />
        <YAxis tick={{ fill: axisColor, fontSize: 12 }} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="created" fill="#3b82f6" />
        <Bar dataKey="closed" fill="#22c55e" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
