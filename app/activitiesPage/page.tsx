import ActivitiesInfosHead from "@/components/ActivitiesInfosHead";
import BottomMenu from "@/components/BottomMenu";

import Header from "@/components/Header";
import { BottomSheet } from "@/components/Slider";
import Colors from "@/constants/Colors";
import { ActiviesPage } from "@/types/types";
import React, { useState } from "react";

import { SafeAreaView, Text } from "react-native";

export default function activiesPage() {
  const data: ActiviesPage[] = [
    {
      name: "IA",
      priority: 1,
      lastStudy: "Qui 12/03",
      studyTimeMinutes: 60,
      pendingSubject: ["LLM", "Python"],
      studyTimeDays: [
        { label: "Seg", value: 15, frontColor: Colors.light.pieChartColors[0] },
        { label: "Ter", value: 25, frontColor: Colors.light.pieChartColors[1] },
        { label: "Qua", value: 20, frontColor: Colors.light.pieChartColors[2] },
        { label: "Qui", value: 30, frontColor: Colors.light.pieChartColors[3] },
        { label: "Sex", value: 10, frontColor: Colors.light.pieChartColors[4] },
        { label: "Sab", value: 35, frontColor: Colors.light.pieChartColors[5] },
        { label: "Dom", value: 5, frontColor: Colors.light.pieChartColors[6] },
      ],
      pendingActivity: [
        {
          name: "Atividade 1",
          description: "Uma descrição 1",
          percentageConclud: 12,
        },
        {
          name: "Atividade 2",
          description: "Uma descrição 2",
          percentageConclud: 57,
        },
        {
          name: "Atividade 3",
          description: "Uma descrição 2",
          percentageConclud: 100,
        },
        {
          name: "Atividade 4",
          description: "Uma descrição 1",
          percentageConclud: 12,
        },
        {
          name: "Atividade 5",
          description: "Uma descrição 2",
          percentageConclud: 57,
        },
        {
          name: "Atividade 6",
          description: "Uma descrição 2",
          percentageConclud: 100,
        },
      ],
    },
    {
      name: "Next.js",
      priority: 2,
      lastStudy: "Qua 10/03",
      studyTimeMinutes: 45,
      pendingSubject: ["Routing", "Server Components"],
      studyTimeDays: [
        { label: "Seg", value: 10, frontColor: Colors.light.pieChartColors[0] },
        { label: "Ter", value: 40, frontColor: Colors.light.pieChartColors[1] },
        { label: "Qua", value: 15, frontColor: Colors.light.pieChartColors[2] },
        { label: "Qui", value: 20, frontColor: Colors.light.pieChartColors[3] },
        { label: "Sex", value: 18, frontColor: Colors.light.pieChartColors[4] },
        { label: "Sab", value: 22, frontColor: Colors.light.pieChartColors[5] },
        { label: "Dom", value: 12, frontColor: Colors.light.pieChartColors[6] },
      ],
      pendingActivity: [
        {
          name: "Atividade 3",
          description: "Uma descrição 3",
          percentageConclud: 23,
        },
        {
          name: "Atividade 4",
          description: "Uma descrição 4",
          percentageConclud: 25,
        },
      ],
    },
    {
      name: "NestJS",
      priority: 3,
      lastStudy: "Ter 09/03",
      studyTimeMinutes: 30,
      pendingSubject: ["Guards", "GraphQL", "Prisma"],
      studyTimeDays: [
        { label: "Seg", value: 22, frontColor: Colors.light.pieChartColors[0] },
        { label: "Ter", value: 18, frontColor: Colors.light.pieChartColors[1] },
        { label: "Qua", value: 25, frontColor: Colors.light.pieChartColors[2] },
        { label: "Qui", value: 12, frontColor: Colors.light.pieChartColors[3] },
        { label: "Sex", value: 8, frontColor: Colors.light.pieChartColors[4] },
        { label: "Sab", value: 30, frontColor: Colors.light.pieChartColors[5] },
        { label: "Dom", value: 5, frontColor: Colors.light.pieChartColors[6] },
      ],
      pendingActivity: [
        {
          name: "Atividade 3",
          description: "Uma descrição 3",
          percentageConclud: 25,
        },
        {
          name: "Atividade 4",
          description: "Uma descrição 4",
          percentageConclud: 25,
        },
      ],
    },
    {
      name: "Inglês",
      priority: 1,
      lastStudy: "Sex 14/03",
      studyTimeMinutes: 50,
      pendingSubject: ["Conversação", "Vocabulário"],
      studyTimeDays: [
        { label: "Seg", value: 35, frontColor: Colors.light.pieChartColors[0] },
        { label: "Ter", value: 15, frontColor: Colors.light.pieChartColors[1] },
        { label: "Qua", value: 10, frontColor: Colors.light.pieChartColors[2] },
        { label: "Qui", value: 18, frontColor: Colors.light.pieChartColors[3] },
        { label: "Sex", value: 22, frontColor: Colors.light.pieChartColors[4] },
        { label: "Sab", value: 28, frontColor: Colors.light.pieChartColors[5] },
        { label: "Dom", value: 20, frontColor: Colors.light.pieChartColors[6] },
      ],
      pendingActivity: [
        {
          name: "Atividade 1",
          description: "Uma descrição 3",
          percentageConclud: 100,
        },
        {
          name: "Atividade 2",
          description: "Uma descrição 4",
          percentageConclud: 25,
        },
      ],
    },
    {
      name: "Design de Software",
      priority: 2,
      lastStudy: "Seg 08/03",
      studyTimeMinutes: 40,
      pendingSubject: ["Clean Code", "DDD", "Arquitetura Hexagonal"],
      studyTimeDays: [
        { label: "Seg", value: 30, frontColor: Colors.light.pieChartColors[0] },
        { label: "Ter", value: 12, frontColor: Colors.light.pieChartColors[1] },
        { label: "Qua", value: 8, frontColor: Colors.light.pieChartColors[2] },
        { label: "Qui", value: 16, frontColor: Colors.light.pieChartColors[3] },
        { label: "Sex", value: 14, frontColor: Colors.light.pieChartColors[4] },
        { label: "Sab", value: 40, frontColor: Colors.light.pieChartColors[5] },
        { label: "Dom", value: 25, frontColor: Colors.light.pieChartColors[6] },
      ],
      pendingActivity: [
        {
          name: "Atividade 4",
          description: "Uma descrição 3",
          percentageConclud: 25,
        },
        {
          name: "Atividade 3",
          description: "Uma descrição 4",
          percentageConclud: 25,
        },
      ],
    },
    {
      name: "React Native",
      priority: 3,
      lastStudy: "Dom 15/03",
      studyTimeMinutes: 35,
      pendingSubject: ["Navigation", "Async Storage", "Expo Updates"],
      studyTimeDays: [
        { label: "Seg", value: 5, frontColor: Colors.light.pieChartColors[0] },
        { label: "Ter", value: 8, frontColor: Colors.light.pieChartColors[1] },
        { label: "Qua", value: 6, frontColor: Colors.light.pieChartColors[2] },
        { label: "Qui", value: 14, frontColor: Colors.light.pieChartColors[3] },
        { label: "Sex", value: 12, frontColor: Colors.light.pieChartColors[4] },
        { label: "Sab", value: 10, frontColor: Colors.light.pieChartColors[5] },
        { label: "Dom", value: 7, frontColor: Colors.light.pieChartColors[6] },
      ],
      pendingActivity: [
        {
          name: "Atividade 7",
          description: "Uma descrição 3",
          percentageConclud: 25,
        },
        {
          name: "Atividade 8",
          description: "Uma descrição 4",
          percentageConclud: 25,
        },
      ],
    },
  ];
  const [selectedPiece, setSelectedPiece] = useState<string>("");
  const filteredActivities = data.find((item) => item.name === selectedPiece);
  console.log(filteredActivities?.pendingActivity);
  return (
    <SafeAreaView className="px-2">
      <Header />
      <ActivitiesInfosHead data={data} setSelectedPice={setSelectedPiece} />
      <BottomSheet
        data={
          filteredActivities?.pendingActivity ||
          data[data.length - 1].pendingActivity
        }
      />
      {/* <BottomMenu /> */}
    </SafeAreaView>
  );
}
