import Colors from "@/constants/Colors";
import { useEffect, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ImagesCarroselProps {
  imagesSources: ImageSourcePropType[];
  maxWidthImage: number;
  imagesTexts?: string[];
  handleClickSkip: () => void;
}

export default function ImagesCarrosel({
  imagesSources,
  maxWidthImage,
  imagesTexts,
  handleClickSkip,
}: ImagesCarroselProps) {
  const [actualImage, setActualImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActualImage((prev) => (prev + 1) % imagesSources.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesSources.length]);

  function handleChangeImageClick() {
    if (actualImage + 1 === imagesSources.length) {
      setActualImage(0);
    } else {
      setActualImage((prev) => prev + 1);
    }
  }
  return (
    <View style={styles.container} className="w-96">
      <Image
        source={imagesSources[actualImage]}
        className=" max-h-64 max-w-96 mt-24 self-center"
        style={{ resizeMode: "contain" }}
      />
      <View className="flex flex-col justify-center w-full">
        <View className="flex gap-1 flex-row mt-20">
          {imagesSources &&
            imagesSources.map((source, index) => (
              <Pressable key={index}>
                <View
                  style={[
                    styles.buttonImage,
                    index === actualImage && styles.buttonImageActive,
                  ]}
                ></View>
              </Pressable>
            ))}
        </View>
      </View>
      {imagesTexts ? (
        <Text className="text-black w-82 text-2xl font-bold mt-20 min-h-[120] ">
          {imagesTexts[actualImage]}
        </Text>
      ) : (
        <Text className="text-black w-82 text-xl font-bold mt-7 min-h-[120]">
          Nenhum texto aqui
        </Text>
      )}
      <View style={styles.skipView}>
        <Pressable onPress={handleClickSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </Pressable>
        <Pressable onPress={handleChangeImageClick}>
          <Image
            source={require("@/assets/buttonNext.png")}
            alt="Button to change the image"
            style={styles.skipButtonImage}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
  },

  buttonImage: {
    width: 9,
    height: 9,
    backgroundColor: Colors.light.backgroundDisable,
    borderRadius: 100,
  },
  buttonsImage: {
    flexDirection: "row",
    gap: 3,
  },
  buttonImageActive: {
    backgroundColor: Colors.light.backgroundEnable,
  },
  imageDescription: {
    color: "#000",
    width: 330,
    fontSize: 22,
    height: 120,
    fontWeight: "bold",
    marginTop: 40,
  },
  skipView: {
    width: 330,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
  },
  skipButtonText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  skipButtonImage: {
    width: 50,
    height: 50,
  },
});
