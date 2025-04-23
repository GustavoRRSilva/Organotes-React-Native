// components/LegendaMateria.tsx
import React from "react";
import { Text, View } from "react-native";

interface LegendaMateriaProps {
  cor: string;
  nome: string;
}

export default function LegendaMateria({ cor, nome }: LegendaMateriaProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <View
        style={{
          backgroundColor: cor,
          width: 20,
          height: 20,
          borderRadius: 999,
        }}
      />
      <Text style={{ maxWidth: 130 }}>{nome}</Text>
    </View>
  );
}
