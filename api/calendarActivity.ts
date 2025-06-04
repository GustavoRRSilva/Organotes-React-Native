import { PendingActivityPut, PostActivity } from "@/types/types";
import api from "./client";
import endpoints from "./endpoints";

export const getAllCalendarActivity = async () => {
  const response = await api.get(endpoints.getAllCalendarActivities());
  return response.data;
};
export const postNewCalendarActivity = async (body: any) => {
  const response = await api.post(endpoints.postNewCalendarActivity(), body);

  return response.data;
};
