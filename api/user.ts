import api from "./client";
import endpoints from "./endpoints";

export const getAllUserInfos = async () => {
  const response = await api.get(endpoints.getUserInfos());
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get(endpoints.getUserProfile());
  return response.data;
};
