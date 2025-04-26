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
  frontColor: string;
};

export type BarChartProps = {
  data: StudyTimeDays[];
};

export type PendingActivity = {
  name: string;
  description: string;
  percentageConclud: number;
};

export type ActiviesPage = {
  name: string;
  priority: number;
  lastStudy: string;
  studyTimeMinutes: number;
  pendingSubject: string[];
  studyTimeDays: StudyTimeDays[];
  PendingActivity: PendingActivity[];
};

export type BottomSheetProps = {
  data: PendingActivity[];
};

export type ActivitiesInfosHeadProps = {
  data: ActiviesPage[];
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
