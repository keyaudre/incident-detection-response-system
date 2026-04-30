export function exportIncidentsReportCsv(incidents, responses) {
  const responseMap = new Map();

  responses.forEach((response) => {
    responseMap.set(response.incident_id, response);
  });

  const rows = incidents.map((incident) => {
    const response = responseMap.get(incident.incident_id);

    return {
      incident_id: incident.incident_id,
      incident_type: incident.incident_type,
      tags: (incident.tags ?? []).join(" | "),
      severity: incident.severity,
      status: incident.status,
      source_ip: incident.source_ip,
      detected_at: incident.detected_at,
      resolved_at: incident.resolved_at ?? "",
      action_taken: response?.action_taken ?? "",
      notes: response?.notes ?? "",
      response_time: response?.response_time ?? "",
    };
  });

  const headers = Object.keys(rows[0] ?? {
    incident_id: "",
    incident_type: "",
    tags: "",
    severity: "",
    status: "",
    source_ip: "",
    detected_at: "",
    resolved_at: "",
    action_taken: "",
    notes: "",
    response_time: "",
  });

  const csv = [
    headers.join(","),
    ...rows.map((row) =>
      headers
        .map((header) => `"${String(row[header] ?? "").replace(/"/g, '""')}"`)
        .join(",")
    ),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.setAttribute("download", "incident-reports.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
