import { PendingActivityPut, PostActivity } from "@/types/types";
import api from "./client";
import endpoints from "./endpoints";

export const postPendingActivity = async (data: PostActivity) => {
  const response = await api.post(
    endpoints.addPendingActivity(data.subjectId),
    data.data
  );
  return response.data;
};

export const getPendingActivity = async (pedingActivityId: string) => {
  const response = await api.get(
    endpoints.getPendingActivity(pedingActivityId)
  );

  return response.data;
};

export const getAllPendingActivity = async (subjectId: string) => {
  const response = await api.get(endpoints.getAllPendingActivity(subjectId));
  return response.data;
};

export const putPendingActivity = async (
  pendingActivityId: string,
  putPendingActivity: PendingActivityPut
) => {
  const response = await api.put(
    endpoints.putPendingActivity(pendingActivityId),
    putPendingActivity
  );

  return response.data;
};

export const deletePendingActivity = async (pendingActivityId: string) => {
  const response = await api.delete(
    endpoints.deletePendingActivity(pendingActivityId)
  );
  return response.data;
};
