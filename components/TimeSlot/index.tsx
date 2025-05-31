import Colors from "@/constants/Colors";
import { TimeSlotProps } from "@/types/types";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function TimeSlot({ selectedDate }: TimeSlotProps) {
  const times = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  const activities = [
    {
      id: "e5935de3-b4f4-4d9d-9c74-077ef590eb20",
      day: "31",
      userId: "62c8b4a3-1838-44ea-98f7-efdcc5f8205c",
      month: "5",
      year: "2025",
      activityCalendar: [
        {
          id: "199249d8-c800-4c35-b0c4-9f698666358d",
          activityName: "Estudar Matemática",
          description: "string",
          activityCalendarId: "e5935de3-b4f4-4d9d-9c74-077ef590eb20",
          time: "04:00",
          duration: "01:00",
        },
      ],
    },
  ];

  const thereIsActivityInThisTime = (time: string) => {
    const searchActivty = activities[0].activityCalendar.find(
      (activityCalendar) => activityCalendar.time === time
    );
    return searchActivty;
  };

  return (
    <ScrollView className="px-2 ">
      {times.map((time, index) => {
        const valuesDay = thereIsActivityInThisTime(time);
        return (
          <View key={index} className="flex-row min-h-14">
            <Text className="text-lg">{time}</Text>
            <View className="w-full">
              {valuesDay && (
                <View
                  className=" h-14 rounded-lg p-4 ml-4 "
                  style={{
                    backgroundColor:
                      index % 2 == 0
                        ? Colors.light.purpleC
                        : Colors.light.purpleD,
                  }}
                >
                  <View className="flex flex-row items-center gap-2">
                    <View
                      className="w-4 h-4 rounded-full block"
                      style={{
                        backgroundColor:
                          index % 2 == 0
                            ? Colors.light.purpleD
                            : Colors.light.purpleE,
                      }}
                    ></View>
                    <View className="flex-row justify-between w-full max-w-72 items-center">
                      <Text
                        className="text-lg text-white font-semibold"
                        style={{ color: Colors.light.purpleA }}
                      >
                        {valuesDay.activityName}
                      </Text>
                      <Text
                        className="text-base text-white font-semibold"
                        style={{ color: Colors.light.purpleA }}
                      >
                        {valuesDay.duration}H
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
