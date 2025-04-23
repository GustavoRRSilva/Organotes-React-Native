import { PieChartProps } from "@/types/types";
import React from "react";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function PieChartComponent({ data }: PieChartProps) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <PieChart
        data={data}
        radius={100}
        textSize={20}
        focusOnPress
        textBackgroundRadius={26}
        innerRadius={60}
        donut
      />
      <Text
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: [
            { translateX: -40 }, // metade da largura estimada do texto
            { translateY: -10 }, // metade da altura estimada do texto
          ],
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {data.length} Matérias
      </Text>
    </View>
  );
}
