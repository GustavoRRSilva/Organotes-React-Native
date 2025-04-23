import { ActiviesPage, ActivitiesInfosHeadProps } from "@/types/types";
import React from "react";
import { Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import PieChartComponent from "../PieChart";
import Colors from "@/constants/Colors";

export default function ActivitiesInfosHead({
  data,
}: ActivitiesInfosHeadProps) {
  const pieChartInfos = data.map((atividade, index) => ({
    name: atividade.name,
    value: atividade.pendingSubject.length,
    color: Colors.light.pieChartColors[index],
  }));
  return <PieChartComponent data={pieChartInfos} />;
}
