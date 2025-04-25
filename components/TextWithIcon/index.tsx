// components/InfoComIcone.tsx

import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface InfoComIconeProps {
  imagem: ImageSourcePropType;
  texto: string;
  valor: string | number;
  alt: string;
}

export default function InfoComIcone({
  imagem,
  texto,
  valor,
  alt,
}: InfoComIconeProps) {
  return (
    <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
      <Image source={imagem} alt={alt} style={{ width: 20, height: 20 }} />
      <Text style={{ fontWeight: "600" }}>
        {texto}
        {valor}
      </Text>
    </View>
  );
}
