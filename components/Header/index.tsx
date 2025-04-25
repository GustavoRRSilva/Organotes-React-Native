import React from "react";
import { Image, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/Perfil.png")}
        style={[styles.image, styles.perfil]}
        resizeMode="contain"
      />
      <Image
        source={require("@/assets/logo.png")}
        style={[styles.image, styles.logo]}
        resizeMode="contain"
      />
      <Image
        source={require("@/assets/config.png")}
        style={[styles.image, styles.config]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  image: {
    resizeMode: "contain",
  },
  perfil: {
    maxWidth: 128,
    height: 50,
  },
  logo: {
    maxWidth: 128,
    height: 50,
  },
  config: {
    maxWidth: 112,
    height: 50,
  },
});
