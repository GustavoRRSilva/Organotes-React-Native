import { NewActivity, PendingActivityPut, PostActivity } from "@/types/types";

// src/api/endpoints.ts
const endpoints = {
  getUserInfos: () => `auth/me`,
  getUserProfile: () => `auth/userProfile`,
  getAllUserSubjects: () => `subject`,
  addPendingActivity: (subjectId: string) => `activity/${subjectId}`,
  getPendingActivity: (activityId: string) => `activity/findOne/${activityId}`,
  getAllPendingActivity: (subjectId: string) => `activity/${subjectId}`,
  putPendingActivity: (activityId: string) => `activity/${activityId}`,
  deletePendingActivity: (activityId: string) => `activity/${activityId}`,
  getAllCalendarActivities: () => "day-calendar-activities",
  getOneCalendarActivities: (id: string) => `day-calendar-activities/${id}`,
  postNewCalendarActivity: () => "activity-calendar",
};

export default endpoints;
