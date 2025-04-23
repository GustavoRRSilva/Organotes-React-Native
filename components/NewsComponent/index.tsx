import Colors from "@/constants/Colors";
import { useFonts } from "expo-font";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface NewsComponentProps {
  title: string;
  paragraph: string;
  handleFunction: () => void;
  buttonTitle: string;
}

const NewsComponent = ({
  title,
  paragraph,
  handleFunction,
  buttonTitle,
}: NewsComponentProps) => {
  let fontsLoaded = useFonts({
    "Poppins-regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-bold-italic": require("@/assets/fonts/Poppins-BoldItalic.ttf"),
    "Poppins-medium": require("@/assets/fonts/Poppins-Medium.ttf"),
  });
  console.log;
  return (
    <View
      className={`relative w-[100%]   px-4 py-4 m-auto rounded-xl`}
      style={{
        backgroundColor: ' backgroundColor: "rgba(212, 213, 234, 0.65)",',
      }}
    >
      <View className="flex-row gap-1 items-center self-end">
        <Text
          className=" font-poppins text-xl"
          style={{ fontFamily: "Poppins-medium" }}
        >
          Novidade
        </Text>
        <Image source={require("@/assets/fireIcon.png")} />
      </View>
      <View className="text-3xl font-bold italic w-[46%] flex flex-row flex-wrap gap-x-2 h-fit ">
        {title.split(" ").map((word, index) => (
          <Text
            key={index}
            style={{
              color: index === 1 ? Colors.light.purpleB : Colors.light.purpleA, // Ajustando as cores
              fontFamily: "Poppins-bold-italic",
              marginTop: -10,
              // Adicionando espaçamento entre as palavras
            }}
            className="h-fit text-3xl w-fit font-bold font-poppins"
          >
            {word}
          </Text>
        ))}
      </View>
      <Text
        style={{ fontFamily: "Poppins-medium", fontSize: 15 }}
        className=" mt-4 font-poppins font-medium"
      >
        {paragraph}
      </Text>
      <Pressable
        onPress={handleFunction}
        className={`w-32 mt-5 border-2 rounded-3xl py-1 border-black self-end`}
      >
        <View className="flex justify-end items-end flex-row ">
          <Text
            className="font-poppins text-lg w-full text-center"
            style={{ fontFamily: "Poppins-medium", margin: "auto" }}
          >
            {buttonTitle}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default NewsComponent;
