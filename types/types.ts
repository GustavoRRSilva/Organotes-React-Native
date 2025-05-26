import PendingSubject from "@/components/PendingSubjects";

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
  setIsModalVisible: (isModalVisible: boolean) => void;
  pendingActivityId: string;
};
