import React from "react";
import { Image, View } from "react-native";

export default function Header() {
  return (
    <View className="flex flex-row w-full justify-between items-center px-2">
      <Image
        source={require("@/assets/Perfil.png")}
        className="max-w-32 "
        style={{ resizeMode: "contain" }}
      />
      <Image
        source={require("@/assets/logo.png")}
        className="max-w-32  "
        style={{ resizeMode: "contain" }}
      />
      <Image
        source={require("@/assets/config.png")}
        className="max-w-28 "
        style={{ resizeMode: "contain" }}
      />
    </View>
  );
}
