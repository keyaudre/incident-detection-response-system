import { activityLogs } from "../data/activityLogs";
import { incidents, responses } from "../data/mockData";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchIncidents() {
  await delay(500);
  return incidents;
}

export async function fetchResponses() {
  await delay(500);
  return responses;
}

export async function fetchActivityLogs() {
  await delay(400);
  return activityLogs;
}
