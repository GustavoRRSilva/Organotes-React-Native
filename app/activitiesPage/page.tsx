import ActivitiesInfosHead from "@/components/ActivitiesInfosHead";
import Header from "@/components/Header";
import { ActiviesPage } from "@/types/types";
import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function activiesPage() {
  const data: ActiviesPage[] = [
    {
      name: "IA",
      priority: 1,
      lastStudy: "Qui 12/03",
      studyTimeMinutes: 60,
      pendingSubject: ["LLM", "Python"],
    },
    {
      name: "Next.js",
      priority: 2,
      lastStudy: "Qua 10/03",
      studyTimeMinutes: 45,
      pendingSubject: ["Routing", "Server Components"],
    },
    {
      name: "NestJS",
      priority: 3,
      lastStudy: "Ter 09/03",
      studyTimeMinutes: 30,
      pendingSubject: ["Guards", "GraphQL", "Prisma"],
    },
    {
      name: "Inglês",
      priority: 1,
      lastStudy: "Sex 14/03",
      studyTimeMinutes: 50,
      pendingSubject: ["Conversação", "Vocabulário"],
    },
    {
      name: "Design de Software",
      priority: 2,
      lastStudy: "Seg 08/03",
      studyTimeMinutes: 40,
      pendingSubject: ["Clean Code", "DDD", "Arquitetura Hexagonal"],
    },
    {
      name: "React Native",
      priority: 3,
      lastStudy: "Dom 15/03",
      studyTimeMinutes: 35,
      pendingSubject: ["Navigation", "Async Storage", "Expo Updates"],
    },
  ];

  return (
    <SafeAreaView className="px-2">
      <Header />
      <ActivitiesInfosHead data={data} />
    </SafeAreaView>
  );
}
