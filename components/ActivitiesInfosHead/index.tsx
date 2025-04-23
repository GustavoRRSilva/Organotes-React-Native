import { ActiviesPage, ActivitiesInfosHeadProps } from "@/types/types";
import React from "react";
import { Text, View } from "react-native";
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
    pressed: false,
    onPress: () => {
      console.log("Fatia pressionada" + atividade.name);
    },
  }));
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <PieChartComponent data={pieChartInfos} />
      <View style={{ justifyContent: "space-around", width: "40%" }}>
        {pieChartInfos.map((subject) => (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <View
              style={{
                backgroundColor: subject.color,
                width: 20,
                height: 20,
                borderRadius: "100%",
              }}
            >
              {" "}
            </View>
            <Text style={{ maxWidth: 130 }}>{subject.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
