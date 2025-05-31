import { NewActivity, PendingActivityPut, PostActivity } from "@/types/types";

// src/api/endpoints.ts
const endpoints = {
  getUserInfos: () => `auth/me`,
  getAllUserSubjects: () => `subject`,
  addPendingActivity: (subjectId: string) => `activity/${subjectId}`,
  getPendingActivity: (activityId: string) => `activity/findOne/${activityId}`,
  getAllPendingActivity: (subjectId: string) => `activity/${subjectId}`,
  putPendingActivity: (activityId: string) => `activity/${activityId}`,
  deletePendingActivity: (activityId: string) => `activity/${activityId}`,
};

export default endpoints;
