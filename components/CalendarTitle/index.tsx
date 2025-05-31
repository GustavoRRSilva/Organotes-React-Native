import Colors from "@/constants/Colors";
import { CalendarTitleProps } from "@/types/types";
import React from "react";
import { Text } from "react-native";
import { View } from "react-native";

export default function CalendarTitle({ data }: CalendarTitleProps) {
  return (
    <View className="px-4 py-2 mt-4">
      <Text className="text-3xl font-bold" style={{ color: Colors.light.text }}>
        Calendário{" "}
        <Text className="text-gray-400 font-medium">
          {data.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
          })}
        </Text>
      </Text>
    </View>
  );
}
