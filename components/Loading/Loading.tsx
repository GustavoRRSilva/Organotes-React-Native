import { StyleSheet, View, Animated, Easing } from "react-native";
import { useRef, useEffect } from "react";
import React from "react";
export const Loading = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotate = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    );
    rotate.start();
  }, [rotateAnim]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View>
      <Animated.Image
        //Usado para fazer os testes
        testID="loading-icon"
        source={require("@/public/loading.png")}
        style={[
          styles.loadingIcon,
          { transform: [{ rotate: rotateInterpolate }] },
        ]}
        className="Loading"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
  loadingIcon: {
    width: 50,
    height: 50,
  },
});
