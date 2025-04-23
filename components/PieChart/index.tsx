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
  const dataComOpacidade = data.map((item) => ({
    ...item,
    opacity: selectedInfo === item.name ? 1 : 0.2,
    focused: selectedInfo === item.name, // 👈 destaque a fatia clicada
  }));

  return (
    <View
      style={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "relative",
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
          top: "50%",
          left: "50%",
          transform: [
            { translateX: -35 }, // ajuste para centralizar o texto
            { translateY: -10 },
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
