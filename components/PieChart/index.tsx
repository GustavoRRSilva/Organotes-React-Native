import { PieChartProps } from "@/types/types";
import React from "react";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

interface PieChartComponentProps extends PieChartProps {
  selectedInfo: string;
}

export default function PieChartComponent({
  data,
  selectedInfo,
}: PieChartComponentProps) {
  console.log(data);
  const dataComOpacidade = data.map((item) => ({
    ...item,
    opacity: selectedInfo === item.name ? 1 : 0.2,
    focused: selectedInfo === item.name, // 👈 destaque a fatia clicada
  }));

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PieChart
        data={dataComOpacidade}
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

          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {data.length} Matérias
      </Text>
    </View>
  );
}
