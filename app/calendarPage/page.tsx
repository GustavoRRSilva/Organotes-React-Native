import CalendarTitle from "@/components/CalendarTitle";
import Header from "@/components/Header";
import TimeSlot from "@/components/TimeSlot";
import WeekSelector from "@/components/WeekSelector";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <SafeAreaView>
      <View className="px-4">
        <Header />
        <CalendarTitle data={selectedDate} />
        <WeekSelector
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <TimeSlot selectedDate={selectedDate} />
      </View>
    </SafeAreaView>
  );
}
