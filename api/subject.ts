import api from "./client";
import endpoints from "./endpoints";

export const getAllUserSubjects = async () => {
  const response = await api.get(endpoints.getAllUserSubjects());
  return response.data;
};
