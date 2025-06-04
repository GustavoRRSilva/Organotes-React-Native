import { RelativePathString, useRouter } from "expo-router";
import React from "react";
import { Image, View, StyleSheet, Pressable } from "react-native";

export default function Header() {
  const route = useRouter();

  const handleChangePage = (pageUrl: any) => {
    route.push(pageUrl);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => handleChangePage("/userInfos/page")}>
        <Image
          source={require("@/assets/Perfil.png")}
          style={[styles.image, styles.perfil]}
          resizeMode="contain"
        />
      </Pressable>
      <Pressable onPress={() => handleChangePage("/activitiesPage/page")}>
        <Image
          source={require("@/assets/logo.png")}
          style={[styles.image, styles.logo]}
          resizeMode="contain"
        />
      </Pressable>
      <Pressable onPress={() => handleChangePage("/calendarPage/page")}>
        <Image
          source={require("@/assets/config.png")}
          style={[styles.image, styles.config]}
          resizeMode="contain"
        />
      </Pressable>
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
