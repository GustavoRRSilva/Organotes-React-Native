import Colors from "@/constants/Colors";
import { ActivityCalendar, TimeSlotProps } from "@/types/types";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import ModalComponent from "../Modal";
import {
  getAllCalendarActivity,
  postNewCalendarActivity,
} from "@/api/calendarActivity";

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

  const [totalData, setTotalData] = useState<ActivityCalendar[]>([]);
  const [activitySelected, setActivitySelected] = useState<any | null>(null);
  const [timeClicked, setTimeClicked] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [form, setForm] = useState({
    activityName: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getAllCalendarData = async () => {
    try {
      const data = await getAllCalendarActivity();
      setTotalData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllCalendarData();
  }, [selectedDate]);

  const thereIsActivityInThisTime = (time: string) => {
    const dayWithdata = totalData.find(
      (data) =>
        data.day == selectedDate.getDay().toString() &&
        data.year == selectedDate.getFullYear().toString() &&
        data.month === (selectedDate.getMonth() + 1).toString()
    );
    return (
      totalData.length > 0 &&
      dayWithdata &&
      dayWithdata.activityCalendar.find(
        (activityCalendar) => activityCalendar.time === time
      )
    );
  };

  const handleShowTime = (time: string) => {
    setIsModalVisible(true);
    const selectedActivity = thereIsActivityInThisTime(time);
    setActivitySelected(selectedActivity || null);
    setTimeClicked(time);
  };

  const handleCreateActivity = async () => {
    if (!form.activityName || !form.description) return;

    const body = {
      ...form,
      time: timeClicked,
      day: selectedDate.getDate(),
      month: selectedDate.getMonth() + 1,
      year: selectedDate.getFullYear(),
    };

    setIsSubmitting(true);

    try {
      await postNewCalendarActivity(body); // Apenas envia
      await getAllCalendarData(); // Atualiza a lista após sucesso
      setIsModalVisible(false); // Fecha o modal
      setForm({ activityName: "", description: "" }); // Limpa formulário
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView className="px-2">
      {times.map((time, index) => {
        const valuesDay = thereIsActivityInThisTime(time);
        return (
          <Pressable key={index} onPress={() => handleShowTime(time)}>
            <View className="flex-row min-h-14">
              <Text className="text-lg">{time}</Text>
              <View className="w-full">
                {valuesDay && (
                  <View
                    className="h-14 rounded-lg p-4 ml-4"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? Colors.light.purpleC
                          : Colors.light.purpleD,
                    }}
                  >
                    <View className="flex flex-row items-center gap-2">
                      <View
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor:
                            index % 2 === 0
                              ? Colors.light.purpleD
                              : Colors.light.purpleE,
                        }}
                      />
                      <View className="flex-row justify-between w-full max-w-72 items-center">
                        <Text
                          className="text-lg font-semibold"
                          style={{ color: Colors.light.purpleA }}
                        >
                          {valuesDay.activityName}
                        </Text>
                        <Text
                          className="text-base font-semibold"
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
            <ModalComponent
              isModalvisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            >
              <Text className="text-2xl font-semibold text-center">
                {timeClicked}
              </Text>

              {activitySelected ? (
                <>
                  <Text
                    className="text-xl mt-4 text-center font-semibold"
                    style={{ color: Colors.light.purpleA }}
                  >
                    {activitySelected.activityName}
                  </Text>
                  <Text
                    className="text-base mt-4 text-center font-semibold"
                    style={{ color: Colors.light.purpleA }}
                  >
                    {activitySelected.description}
                  </Text>
                  <Text
                    className="text-base mt-4 text-center font-semibold"
                    style={{ color: Colors.light.purpleA }}
                  >
                    Duração: {activitySelected.duration}
                  </Text>
                </>
              ) : (
                <View className="mt-4">
                  <Text
                    className="text-lg mb-2"
                    style={{ color: Colors.light.purpleA }}
                  >
                    Nome da atividade
                  </Text>
                  <TextInput
                    value={form.activityName}
                    onChangeText={(text) =>
                      setForm((f) => ({ ...f, activityName: text }))
                    }
                    className="bg-white rounded p-2 mb-4"
                    placeholder="Estudar Direito"
                  />
                  <Text
                    className="text-lg mb-2"
                    style={{ color: Colors.light.purpleA }}
                  >
                    Descrição
                  </Text>
                  <TextInput
                    value={form.description}
                    onChangeText={(text) =>
                      setForm((f) => ({ ...f, description: text }))
                    }
                    className="bg-white rounded p-2 mb-4"
                    placeholder="Capítulo 3 - Constitucional"
                  />

                  <Pressable
                    onPress={handleCreateActivity}
                    className="bg-purple-600 p-3 rounded-lg mt-4"
                    disabled={isSubmitting}
                  >
                    <Text className="text-white text-center font-bold">
                      {isSubmitting ? "Adicionando..." : "Adicionar atividade"}
                    </Text>
                  </Pressable>
                </View>
              )}
            </ModalComponent>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
