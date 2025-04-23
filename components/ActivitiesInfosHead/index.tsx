import { ActivitiesInfosHeadProps } from "@/types/types";
import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

import PieChartComponent from "../PieChart";
import Colors from "@/constants/Colors";
import LegendaMateria from "../SubjectLegend";
import PendingSubject from "../PendingSubjects";

export default function ActivitiesInfosHead({
  data,
}: ActivitiesInfosHeadProps) {
  const pieChartInfos = data.map((atividade, index) => ({
    name: atividade.name,
    value: atividade.pendingSubject.length,
    color: Colors.light.pieChartColors[index],
    pressed: false,
    onPress: () => {
      console.log("Fatia pressionada" + atividade.name);
    },
  }));

  const options = [
    {
      text: "PRIORIDADE: ",
      value: data[data.length - 1].priority,
      image: require("@/assets/medal.png"),
      alt: "Medal Image",
    },
    {
      text: "ULTIMO ESTUDO: ",
      value: data[data.length - 1].lastStudy.toUpperCase(),
      image: require("@/assets/books.png"),
      alt: "Books Image",
    },
    {
      text: "HORAS ESTUDADAS: ",
      value: Math.floor(data[data.length - 1].studyTimeMinutes / 60),
      image: require("@/assets/clock.png"),
      alt: "Clock Image",
    },
  ];
  const returnViewWithPhoto = (
    srcPhoto: ImageSourcePropType,
    textInfo: string | number,
    textTitle: string,
    alt: string,
    index: number
  ) => {
    return (
      <View key={index} style={{ flexDirection: "row", gap: 4 }}>
        <Image source={srcPhoto} alt={alt} style={{ width: 20 }} />
        <Text style={{ fontWeight: "bold", fontSize: 10 }}>
          {textTitle}
          {textInfo}
        </Text>
      </View>
    );
  };
  return (
    <View className="mx-2">
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <PieChartComponent data={pieChartInfos} />
        <View style={{ justifyContent: "space-between", width: "40%" }}>
          {pieChartInfos.map((subject) => (
            <LegendaMateria
              key={subject.name}
              cor={subject.color}
              nome={subject.name}
            />
          ))}
        </View>
      </View>
      <View
        style={{
          gap: 10,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ justifyContent: "space-between" }}>
          {options.map((option, index) =>
            returnViewWithPhoto(
              option.image,
              option.value,
              option.text,
              option.alt,
              index
            )
          )}
        </View>
        <PendingSubject data={data[0].pendingSubject} />
      </View>
    </View>
  );
}
