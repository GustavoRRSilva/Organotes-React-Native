import { PendingSubjectProps } from "@/types/types";
import React from "react";
import { Image, Text, View } from "react-native";

export default function PendingSubject({ data }: PendingSubjectProps) {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: "#DADCE0",
        paddingRight: 10,
        paddingLeft: 5,
        paddingVertical: 5,

        borderRadius: 5,
        flexDirection: "column",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Image source={require("@/assets/bookOpen.png")} alt="book icon" />
        <Text>Assuntos Pendentes</Text>
      </View>
      <View style={{ flexDirection: "column", marginTop: 5 }}>
        {data.map((item, index) => (
          <View key={index} style={{ flexDirection: "row", gap: 4 }}>
            <Image
              source={require("@/assets/warning.png")}
              alt="warning icon"
            />
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
