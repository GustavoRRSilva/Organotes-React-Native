import ImagesCarrosel from "@/components/ImagesCarrosel/ImagesCarrosel";
import { useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
export default function Introduction() {
  const router = useRouter();
  function handleClickSkip() {
    router.push("/homepage");
  }

  const imagesSource: ImageSourcePropType[] = [
    require("@/assets/IllustrationFirst.png"),
    require("@/assets/IllustrationSecond.png"),
    require("@/assets/IllustrationLast.png"),
  ];

  const imagesTexts: string[] = [
    "Está cansado de não conseguir cumprir os prazos das suas atividades?",
    "Revise seus horários, analise suas rotinas e invista em uma gestão de tempo mais eficiente!",
    "Venha fazer parte dessa jornada de aprendizado conosco! vamos alcançar grandes resultados.",
  ];

  return (
    <View className="relative px-10 py-5 h-screen ">
      <Image
        source={require("@/public/detailShape.png")}
        className="absolute top-0 right-0"
      />
      <SafeAreaView className="flex items-center mt-40">
        <Image
          source={require("@/public/logo.png")}
          className="w-full max-w-40"
          style={{ resizeMode: "contain" }}
        />
        <ImagesCarrosel
          maxWidthImage={200}
          imagesSources={imagesSource}
          imagesTexts={imagesTexts}
          handleClickSkip={handleClickSkip}
        />
      </SafeAreaView>
      <Image
        source={require("@/assets/detailsBottom.png")}
        className="absolute bottom-0 left-0"
      />
    </View>
  );
}
