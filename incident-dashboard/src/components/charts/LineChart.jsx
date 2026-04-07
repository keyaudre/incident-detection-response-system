import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function LineChartComponent({ incidents = [], theme = "light" }) {
  const axisColor = theme === "dark" ? "#94a3b8" : "#64748b";
  const tooltipStyle =
    theme === "dark"
      ? { backgroundColor: "#0f172a", border: "1px solid #334155", color: "#f8fafc" }
      : { backgroundColor: "#ffffff", border: "1px solid #e2e8f0", color: "#0f172a" };

  const grouped = {};

  incidents.forEach((incident) => {
    const date = incident.detected_at;

    if (!grouped[date]) {
      grouped[date] = 0;
    }

    grouped[date]++;
  });

  const data = Object.keys(grouped).map(date => ({
    date,
    count: grouped[date]
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="date" tick={{ fill: axisColor, fontSize: 12 }} />
        <YAxis tick={{ fill: axisColor, fontSize: 12 }} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey="count" stroke="#3b82f6" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;
