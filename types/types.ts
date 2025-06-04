export interface DataLoginReponse {
  nome: string;
  token: string;
}

export interface AuthResponse {
  data: DataLoginReponse;
}

export type PlanCardPros = {
  planName: "Plano Gratuito" | "Plano";
  planType: "Essencial" | "Pro" | "Avançado";
  planRecomend: "RECOMENDADO" | "MAIS POPULAR" | null;
  lastPlanValue: string;
  actualValue: string;
  advantages: string[];
  handleClick: () => void;
};

export type StudyTimeDays = {
  label: string;
  value: number;
};

export type BarChartProps = {
  data: StudyTimeDays[];
};

export interface StudyRecord {
  id: string;
  subjectId: string;
  dayOfWeek: string;
  minutesStudied: number;
  created_at: string;
}

export interface PendingActivity {
  id: string;
  subjectId: string;
  name: string;
  description: string;
  percentageConclud: number;
  created_at: string;
}

export interface Subject {
  id: string;
  id_user: string;
  title: string;
  priority: number;
  description: string;
  week_day: string[];
  updated_at: string;
  created_at: string;
  pendingSubjects: string[];
  studyRecord: StudyRecord[];
  pendingActivities: PendingActivity[];
}

export interface ActivitiesPage {
  id: string;
  name: string;
  email: string;
  cellphoneNumber: string;
  password: string;
  receiveNotify: boolean;
  updated_at: string;
  created_at: string;
  subjects: Subject[];
}

export type BottomSheetProps = {
  data: PendingActivity[];
  subjectId: string;
};

export type ActivitiesInfosHeadProps = {
  setSelectedPice: (value: string) => void;
};

export type PieChartInfo = {
  name: string;
  value: number;
  color: string;
  pressed?: boolean;
  onPress?: () => void;
};

export type PieChartProps = {
  data: PieChartInfo[];
  selectedInfo: string;
};

export type PendingSubjectProps = {
  data: string[];
};

export type ModalComponentProps = {
  children: React.ReactNode;
  isModalvisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  onDismiss?: () => void;
};

export type TextInputProps = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
};

export type StudyTimeDay = {
  label: string;
  value: number;
};

export type SubjectWithStudyStats = {
  subject: Subject;
  lastStudy: string;
  studyTimeDays: StudyTimeDay[];
};

export type SubjectStatsResponse = SubjectWithStudyStats[];

export type NewActivity = {
  name: string;
  description: string;
  percentageConclud: number;
};

export type PostActivity = {
  data: NewActivity;
  subjectId: string;
};

export type PromisePendingActivity = {
  newActivity: PendingActivity;
};

export type PendingActivityModalProps = {
  isModalvisible: boolean;

  setIsModalVisible: (value: boolean) => void;
  pendingActivityId: string;
  onSaveComplete: () => void; // novo prop
};
export type PendingActivityPut = Partial<NewActivity>;

export type UserData = {
  name: string;
  email: string;
  cellphoneNumber: string;
  receiveNotify: boolean;
  created_at: string;
};

export type CalendarTitleProps = {
  data: Date;
};

export type WeekSelectorProps = {
  selectedDate: Date;
  setSelectedDate: (value: Date) => void;
};

export type CalendarEventProps = {
  title: string;
  duration: string;
  category: string;
};

export type TimeSlotProps = {
  selectedDate: Date;
};

export interface Activity {
  id: string;
  activityName: string;
  description: string;
  activityCalendarId: string;
  time: string; // formato HH:mm
  duration: string; // duração no formato HH:mm ou HH
}

export interface ActivityCalendar {
  id: string;
  day: string; // pode ser "31", etc.
  month: string; // pode ser "5", etc.
  year: string; // pode ser "2025"
  userId: string;
  activityCalendar: Activity[];
}

export interface CreateActivityCalendarDto {
  activityName: string;
  description: string;
  time: string;
  day: number;
  month: number;
  year: number;
}
