import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import Colors from "../constants/Colors";
import { Loading } from "@/components/Loading/Loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  setTimeout(() => router.replace("/auth/Login/Login"), 2000);
  return (
    <SafeAreaView style={{ backgroundColor: Colors.light.background, flex: 1 }}>
      <View style={styles.container}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={Colors.light.background}
          translucent={true}
        />
        <Image source={require("@/public/logo.png")} style={styles.logo} />
        <Loading />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
    paddingHorizontal: 40,
    gap: 80,
  },
  logo: {
    width: "100%",
    resizeMode: "contain",
  },
});
