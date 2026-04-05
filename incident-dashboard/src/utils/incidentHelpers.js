const severityOrder = {
  High: 3,
  Medium: 2,
  Low: 1,
};

export function compareIncidents(a, b) {
  const severityDelta = (severityOrder[b.severity] ?? 0) - (severityOrder[a.severity] ?? 0);

  if (severityDelta !== 0) {
    return severityDelta;
  }

  return new Date(b.detected_at) - new Date(a.detected_at);
}

export function getTopIncidents(incidents, limit = 5) {
  return [...incidents].sort(compareIncidents).slice(0, limit);
}

export function getKpiTrendLabel(value, suffix = "today") {
  return value >= 0 ? `+${value} ${suffix}` : `${value} ${suffix}`;
}

export function getKpiChange(current, previous) {
  if (previous <= 0) {
    return current > 0 ? 100 : 0;
  }

  return Math.round(((current - previous) / previous) * 100);
}

export function getTrendTone(value) {
  if (value > 0) {
    return "up";
  }

  if (value < 0) {
    return "down";
  }

  return "flat";
}
