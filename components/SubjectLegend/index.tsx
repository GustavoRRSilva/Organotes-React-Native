// components/LegendaMateria.tsx
import React from "react";
import { Text, View } from "react-native";

interface LegendaMateriaProps {
  cor: string;
  nome: string;
  selectedInfo: string;
}

export default function LegendaMateria({
  cor,
  nome,
  selectedInfo,
}: LegendaMateriaProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <View
        style={{
          backgroundColor: cor,
          width: 20,
          height: 20,
          borderRadius: 999,
          opacity: selectedInfo == nome ? 1 : 0.2,
        }}
      />
      <Text style={{ maxWidth: 130 }}>{nome}</Text>
    </View>
  );
}
