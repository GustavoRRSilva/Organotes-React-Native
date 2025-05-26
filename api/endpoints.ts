import { NewActivity, PostActivity } from "@/types/types";

// src/api/endpoints.ts
const endpoints = {
  getUserInfos: () => `auth/me`,
  getAllUserSubjects: () => `subject`,
  addPendingActivity: (subjectId: string) => `activity/${subjectId}`,
  getPendingActivity: (activityId: string) => `activity/findOne/${activityId}`,
};

export default endpoints;
