export const STORAGE_KEYS = {
  role: "incident-dashboard-role",
  theme: "incident-dashboard-theme",
  auth: "incident-dashboard-auth",
  notifications: "incident-dashboard-notifications",
};

export function readBooleanSetting(key, fallback = true) {
  const value = localStorage.getItem(key);

  if (value === null) {
    return fallback;
  }

  return value === "true";
}
