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
    <View style={styles.container}>
      <Image source={imagesSources[actualImage]} style={styles.image} />
      <View>
        <View style={styles.buttonsImage}>
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
        <Text style={styles.imageDescription}>{imagesTexts[actualImage]}</Text>
      ) : (
        <Text style={styles.imageDescription}>Nenhum texto aqui</Text>
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
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginTop: 20,
    alignSelf: "center",
  },
  buttonImage: {
    width: 9,
    height: 9,
    backgroundColor: Colors.light.backgroundDisable,
    borderRadius: 100,
  },
  buttonsImage: {
    flexDirection: "row",
    gap: 9,
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
    marginTop: 30,
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
