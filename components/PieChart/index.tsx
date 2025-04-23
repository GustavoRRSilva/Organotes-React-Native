import { PieChartProps } from "@/types/types";
import React from "react";
import { View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function PieChartComponent({ data }: PieChartProps) {
  return (
    <View style={{ maxWidth: 50 }}>
      <PieChart
        data={data}
        radius={150}
        textSize={20}
        focusOnPress
        textBackgroundRadius={26}
        innerRadius={80}
        donut
      />
    </View>
  );
}
