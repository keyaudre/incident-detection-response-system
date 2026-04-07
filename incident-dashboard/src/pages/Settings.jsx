import { Bell, Moon } from "lucide-react";

function Settings({ theme, notificationsEnabled, onThemeChange, onNotificationsChange }) {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Settings</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Personalize dashboard theme and notification behavior.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-slate-100 p-3 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <Moon size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Theme</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Switch between light and dark workspace modes.
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                theme === "light"
                  ? "bg-blue-600 text-white"
                  : "border border-slate-300 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              }`}
              onClick={() => onThemeChange("light")}
            >
              Light
            </button>
            <button
              type="button"
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                theme === "dark"
                  ? "bg-blue-600 text-white"
                  : "border border-slate-300 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              }`}
              onClick={() => onThemeChange("dark")}
            >
              Dark
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-slate-100 p-3 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <Bell size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Notifications</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Control the high-severity incident alert banner.
              </p>
            </div>
          </div>

          <label className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Enable incident notifications
            </span>
            <input
              type="checkbox"
              className="h-4 w-4 accent-blue-600"
              checked={notificationsEnabled}
              onChange={(event) => onNotificationsChange(event.target.checked)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Settings;
