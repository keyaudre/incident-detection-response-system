import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

function PieChartComponent({ incidents = [], theme = "light" }) {
  const tooltipStyle =
    theme === "dark"
      ? { backgroundColor: "#0f172a", border: "1px solid #334155", color: "#f8fafc" }
      : { backgroundColor: "#ffffff", border: "1px solid #e2e8f0", color: "#0f172a" };

  const grouped = {};

  incidents.forEach((incident) => {
    const type = incident.incident_type;

    if (!grouped[type]) {
      grouped[type] = 0;
    }

    grouped[type]++;
  });

  const data = Object.keys(grouped).map(type => ({
    name: type,
    value: grouped[type]
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartComponent;
