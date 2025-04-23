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

export type ActiviesPage = {
  name: string;
  priority: number;
  lastStudy: string;
  studyTimeMinutes: number;
  pendingSubject: string[];
};

export type ActivitiesInfosHeadProps = {
  data: ActiviesPage[];
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
};

export type PendingSubjectProps = {
  data: string[];
};
