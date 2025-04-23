import { ActivitiesInfosHeadProps } from "@/types/types";
import React, { useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

import PieChartComponent from "../PieChart";
import Colors from "@/constants/Colors";
import LegendaMateria from "../SubjectLegend";
import PendingSubject from "../PendingSubjects";
import { BarChartComponent } from "../BarChart";

export default function ActivitiesInfosHead({
  data,
}: ActivitiesInfosHeadProps) {
  const [pieceClicked, setPieceClicked] = useState<string>(data[0].name);
  const pieChartInfos = data.map((atividade, index) => ({
    name: atividade.name,
    value: atividade.pendingSubject.length,
    color: Colors.light.pieChartColors[index],
    pressed: false,
    onPress: () => {
      setPieceClicked(atividade.name);
    },
  }));

  const filter = data.filter((item) => item.name === pieceClicked);
  const TotalTimeStudy: number = data[data.length - 1].studyTimeDays.reduce(
    (total, item) => total + item.value,
    0
  );

  const options = [
    {
      text: "PRIORIDADE: ",
      value: filter[0].priority,
      image: require("@/assets/medal.png"),
      alt: "Medal Image",
    },
    {
      text: "ULTIMO ESTUDO: ",
      value: filter[0].lastStudy.toUpperCase(),
      image: require("@/assets/books.png"),
      alt: "Books Image",
    },
    {
      text: "HORAS ESTUDADAS: ",
      value: Math.floor(filter[0].studyTimeMinutes / 60),
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
        <PieChartComponent data={pieChartInfos} selectedInfo={filter[0].name} />
        <View style={{ justifyContent: "space-between", width: "40%" }}>
          {pieChartInfos.map((subject) => (
            <LegendaMateria
              key={subject.name}
              cor={subject.color}
              nome={subject.name}
              selectedInfo={filter[0].name}
            />
          ))}
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ justifyContent: "space-between", width: "50%" }}>
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
        <View style={{ width: "50%", marginRight: 10 }}>
          <PendingSubject data={filter[0].pendingSubject} />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          borderWidth: 2,
          padding: 4,
          borderRadius: 5,
          borderColor: "#DADCE0",
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Image
              source={require("@/assets/clockGraph.png")}
              style={{ width: 15, resizeMode: "contain" }}
            />
            <Text>Horas Semanais</Text>
          </View>
          <Text>{TotalTimeStudy} horas semanais de estudo</Text>
        </View>

        <BarChartComponent data={filter[0].studyTimeDays} />
      </View>
    </View>
  );
}
