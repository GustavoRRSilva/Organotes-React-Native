import { Image, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "@/components/Header";
import { useFonts } from "expo-font"; // Importando o hook
import Colors from "@/constants/Colors";
import NewsComponent from "@/components/NewsComponent";
import PlansLayout from "@/components/PlansLayout";

import { useRouter } from "expo-router";

export default function HomePage() {
  let fontsLoaded = useFonts({
    "Poppins-regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-semibold": require("@/assets/fonts/Poppins-Semibold.ttf"),
  });

  const router = useRouter();

  const loginPage = () => {
    router.push("/auth/Login/Login");
  };

  return (
    <View className="relative" style={{ flex: 1 }}>
      <Image
        source={require("@/assets/detailHome.png")}
        className="absolute top-[100%] left-50 w-[100%] p-0"
        style={{ resizeMode: "contain", top: "42%" }}
      />
      <LinearGradient
        colors={["#F1F3FE", "#DFE4FF"]}
        className="w-full pb-4 pt-2"
        style={{ borderRadius: 40 }}
      >
        <SafeAreaView
          className="px-4 rounded-3xl"
          style={{ paddingBottom: 10 }}
        >
          <Header />
          <View className="px-4 mt-6 flex flex-row justify-between items-end ">
            <View>
              <Text
                className={`ml-1 text-3xl font-semibold font-poppins color-[${Colors.light.purpleA}]`}
                style={{ fontFamily: "Poppins-semibold" }}
              >
                Bem vindo!
              </Text>
              <Text
                className={`ml-3 w-44 text-xl mt-2 `}
                style={{ fontFamily: "Poppins-regular" }}
              >
                Estude com mais organização
              </Text>
            </View>
            <Pressable
              className={`bg-[${Colors.light.purpleA}] px-8 py-1 rounded-2xl h-fit`}
            >
              <Pressable className="h-fit" onPress={loginPage}>
                <Text
                  className="text-white font-medium  "
                  style={{ fontFamily: "Poppins-regular" }}
                >
                  Começar
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </SafeAreaView>
      </LinearGradient>
      <View className="px-4 mt-4 overflow-auto">
        <NewsComponent
          buttonTitle="Configurar"
          handleFunction={loginPage}
          title="Seu estudo no pulso!"
          paragraph="Receba lembres no smartwatch e nunca mais perca prazos importantes."
        />
      </View>

      <View className="mt-4 px-4 ml-2 max-w-screen">
        <Text
          className="text-2xl font-poppins"
          style={{ fontFamily: "Poppins-semibold" }}
        >
          Assine já
        </Text>
        <View className="overflow-auto">
          <PlansLayout />
        </View>
      </View>
    </View>
  );
}
