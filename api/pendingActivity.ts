import { PostActivity } from "@/types/types";
import api from "./client";
import endpoints from "./endpoints";

export const postPendingActivity = async (data: PostActivity) => {
  const response = await api.post(
    endpoints.addPendingActivity(data.subjectId),
    data.data
  );
  return response.data;
};
