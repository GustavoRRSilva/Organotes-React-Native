import Colors from "@/constants/Colors";
import { WeekSelectorProps } from "@/types/types";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function WeekSelector({
  selectedDate,
  setSelectedDate,
}: WeekSelectorProps) {
  const weekDays = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

  const getWeekDays = () => {
    const startOfWeek = new Date(selectedDate);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
  };

  const getNextWeek = () => {
    const nextWeek = new Date(selectedDate);

    nextWeek.setDate(nextWeek.getDate() + 7);
    setSelectedDate(nextWeek);
  };
  const getPrevWeek = () => {
    const nextWeek = new Date(selectedDate);

    nextWeek.setDate(nextWeek.getDate() - 7);
    setSelectedDate(nextWeek);
  };

  const weekDates = getWeekDays();
  return (
    <View className="flex-row justify-between px-4 py-4 items-center ">
      <Pressable onPress={() => getPrevWeek()}>
        <Image
          source={require("@/assets/arrow.png")}
          alt="arrow to get the last week"
          className="rotate-180 mr-2"
        />
      </Pressable>
      {weekDates.map((date, index) => {
        const isSelected = date.toDateString() === selectedDate.toDateString();
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedDate(date)}
            className={`items-center py-2 px-3 rounded-lg ${
              isSelected ? "border-2" : ""
            }`}
            style={{
              borderColor: isSelected
                ? Colors.light.purpleA
                : Colors.light.purpleD,
            }}
          >
            <Text
              className="text-xs font-medium mb-1"
              style={{ color: Colors.light.placeholder }}
            >
              {weekDays[index]}
            </Text>
            <Text
              className={`text-lg font-semibold ${isSelected ? "text-lg" : ""}`}
              style={{
                color: isSelected ? Colors.light.purpleA : Colors.light.text,
              }}
            >
              {date.getDate()}
            </Text>
          </TouchableOpacity>
        );
      })}
      <Pressable onPress={() => getNextWeek()}>
        <Image
          source={require("@/assets/arrow.png")}
          alt="arrow to get the last week"
          className="ml-2"
        />
      </Pressable>
    </View>
  );
}
