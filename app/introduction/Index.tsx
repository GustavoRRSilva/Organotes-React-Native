import ImagesCarrosel from "@/components/ImagesCarrosel/ImagesCarrosel";
import { useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Introduction() {
  const router = useRouter();

  function handleClickSkip() {
    router.push("/auth/Login/Login");
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
    <View style={styles.container}>
      <Image
        source={require("@/public/detailShape.png")}
        style={styles.topDetailIcon}
      />
      <Image source={require("@/public/logo.png")} style={styles.logo} />
      <ImagesCarrosel
        maxWidthImage={200}
        imagesSources={imagesSource}
        imagesTexts={imagesTexts}
        handleClickSkip={handleClickSkip}
      />
      <Image
        source={require("@/assets/detailsBottom.png")}
        style={styles.bottomDetailIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: "30%",
    maxWidth: 170,
    resizeMode: "contain",
    marginTop: "30%",
  },
  topDetailIcon: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  bottomDetailIcon: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
