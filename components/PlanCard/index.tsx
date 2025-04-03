import Colors from "@/constants/Colors";
import { PlanCardPros } from "@/types/types";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Pressable, Image } from "react-native";

const PlanCard = ({
  planName,
  actualValue,
  advantages,
  handleClick,
  lastPlanValue,
  planRecomend,
  planType,
}: PlanCardPros) => {
  const isPro = planType == "Pro";

  let fontsLoaded = useFonts({
    "Poppins-regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-light": require("@/assets/fonts/Poppins-Light.ttf"),
    "Poppins-semibold": require("@/assets/fonts/Poppins-Semibold.ttf"),
  });

  return (
    <View
      className={` w-fit h-auto p-4 rounded-xl`}
      style={{
        backgroundColor: isPro ? Colors.light.purpleA : Colors.light.purpleB,
        opacity: 0.9,
      }}
      key={planName}
    >
      <Text
        className="font-light text-white font-poppins"
        style={{ fontFamily: "Poppins-light" }}
      >
        {planName}
      </Text>
      <View className="" style={{ height: 50 }}>
        <Text
          className="font-bold text-3xl text-white font-poppins"
          style={{ fontFamily: "Poppins-bold" }}
        >
          {planType}
        </Text>
        {planRecomend &&
          (isPro ? (
            <LinearGradient
              colors={["#979ACB", "#D6BEFF"]}
              start={{ x: 0, y: 0 }} // Gradient starting from left
              end={{ x: 1, y: 0 }}
              style={{
                width: 130,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 100,
              }}
            >
              <Text
                className="font-poppins w-fit"
                style={{ fontFamily: "Poppins-regular" }}
              >
                {planRecomend}
              </Text>
            </LinearGradient>
          ) : (
            <LinearGradient
              colors={["#2B2C3E", "#2B2C3E"]}
              start={{ x: 0, y: 0 }} // Gradient starting from left
              end={{ x: 1, y: 0 }}
              style={{
                width: 120,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 100,
              }}
            >
              <Text
                className="font-poppins w-fit text-white"
                style={{ fontFamily: "Poppins-regular" }}
              >
                {planRecomend}
              </Text>
            </LinearGradient>
          ))}
      </View>
      <Text
        className={`text-base mt-6 font-poppins ${
          isPro ? "text-white" : `text-${Colors.light.purpleA}`
        } `}
        style={{
          textDecorationLine: "line-through",
          fontFamily: "Poppins-light",
        }}
      >
        R${lastPlanValue}
      </Text>
      <Text
        className={`text-2xl font-bold font-poppins ${
          isPro ? "text-white" : `text-${Colors.light.purpleA}`
        }  `}
        style={{ fontFamily: "Poppins-semibold" }}
      >
        R${actualValue}
      </Text>
      <View className="mt-2 justify-center">
        {advantages.map((advantage) => (
          <View className="flex-row items-center gap-2">
            <Image source={require("@/assets/okIcon.png")} />
            <Text
              className="text-white font-poppins"
              style={{ fontFamily: "Poppins-regular" }}
            >
              {advantage}
            </Text>
          </View>
        ))}
      </View>
      <Pressable
        onPress={handleClick}
        className={`mx-auto mt-6 rounded-xl border-2 px-4 py-1 `}
        style={{
          borderColor: Colors.light.purpleC,
        }}
      >
        <View className="">
          <Text
            className={`text-xl font-poppins `}
            style={{ color: isPro ? "white" : Colors.light.purpleA }}
          >
            Selecionar
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PlanCard;
