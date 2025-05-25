import Colors from "@/constants/Colors";
import { BarChartProps } from "@/types/types";
import React from "react";
import { BarChart } from "react-native-gifted-charts";

export const BarChartComponent = ({ data }: BarChartProps) => {
  const formatedData = data.map((item, index) => {
    return {
      ...item,
      frontColor: Colors.light.pieChartColors[index],
    };
  });
  return (
    <BarChart
      data={formatedData}
      width={300}
      height={150}
      barWidth={22}
      showValuesAsTopLabel
      animationDuration={20}
      topLabelTextStyle={{
        color: "black",
        fontSize: 10,
        fontWeight: "bold",
      }}
      xAxisLabelTextStyle={{
        color: "black",
        fontSize: 10,
        fontWeight: "bold",
      }}
    />
  );
};
