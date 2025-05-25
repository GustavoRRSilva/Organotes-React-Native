import React, { useEffect, useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { ActivitiesInfosHeadProps, SubjectStatsResponse } from "@/types/types";
import PieChartComponent from "../PieChart";
import Colors from "@/constants/Colors";
import LegendaMateria from "../SubjectLegend";
import PendingSubject from "../PendingSubjects";
import { BarChartComponent } from "../BarChart";
import { getAllUserSubjects } from "@/api/subject";
import { formatarDiaData } from "@/utils/utils";

export default function ActivitiesInfosHead({
  setSelectedPice,
}: ActivitiesInfosHeadProps) {
  const [data, setData] = useState<SubjectStatsResponse>();

  useEffect(() => {
    getAllUserSubjects()
      .then((data) => setData(data))
      .catch((err) => console.error("Error", err));
  }, []);

  const [pieceClicked, setPieceClicked] = useState<string>("");

  useEffect(() => {
    if (data && data.length > 0) {
      setPieceClicked(data[0].subject.title);
    }
  }, [data]);

  const pieChartInfos =
    data &&
    data.map((item, index) => ({
      name: item.subject.title,
      value: item.subject.pendingActivities.length,
      color: Colors.light.pieChartColors[index],
      pressed: false,
      onPress: () => setPieceClicked(item.subject.title),
    }));

  useEffect(() => {
    setSelectedPice(pieceClicked);
  }, [pieceClicked]);

  const selected =
    data && data.find((item) => item.subject.title === pieceClicked);
  if (!selected) return null;

  const totalMinutes = selected.studyTimeDays.reduce(
    (acc, cur) => acc + cur.value,
    0
  );

  const options = [
    {
      text: "PRIORIDADE: ",
      value: selected.subject.priority,
      image: require("@/assets/medal.png"),
      alt: "Medal Image",
    },
    {
      text: "ÚLTIMO ESTUDO: ",
      value: formatarDiaData(selected.lastStudy).toUpperCase(),
      image: require("@/assets/books.png"),
      alt: "Books Image",
    },
    {
      text: "HORAS ESTUDADAS: ",
      value: Math.floor(totalMinutes / 60),
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
  ) => (
    <View key={index} style={{ flexDirection: "row", gap: 4 }}>
      <Image source={srcPhoto} alt={alt} style={{ width: 20 }} />
      <Text style={{ fontWeight: "bold", fontSize: 10 }}>
        {textTitle}
        {textInfo}
      </Text>
    </View>
  );

  return (
    <View className="mx-2">
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {pieChartInfos && (
          <PieChartComponent
            data={pieChartInfos}
            selectedInfo={selected.subject.title}
          />
        )}

        <View style={{ justifyContent: "space-between", width: "40%" }}>
          {pieChartInfos &&
            pieChartInfos.map((subject) => (
              <LegendaMateria
                key={subject.name}
                cor={subject.color}
                nome={subject.name}
                selectedInfo={selected.subject.title}
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
          paddingHorizontal: 5,
        }}
      >
        <View style={{ gap: 3, width: "50%" }}>
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
          <PendingSubject data={selected.subject.pendingSubjects} />
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
          <Text>
            {Math.floor(totalMinutes / 60)} hora(s) semanais de estudo
          </Text>
        </View>
        <BarChartComponent data={selected.studyTimeDays} />
      </View>
    </View>
  );
}
