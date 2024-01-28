import { request } from "../request";

export const getUserActivity = async () => {
  try {
    return await request(`/api/activity_logs`, {
      method: "GET",
    });
  } catch (error) {
    throw error;
  }
};
