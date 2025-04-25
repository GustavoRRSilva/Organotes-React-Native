import Colors from "@/constants/Colors";
import { useRef, useState, useEffect } from "react";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  PanResponder,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export const BottomSheet = () => {
  // Alturas disponíveis para o bottom sheet
  const snapPoints = {
    MIN: SCREEN_HEIGHT * 0.1, // 10% da tela
    MID: SCREEN_HEIGHT * 0.4, // 40% da tela
    MAX: SCREEN_HEIGHT * 0.7, // 70% da tela
  };

  const translateY: any = useRef(new Animated.Value(snapPoints.MID)).current;
  const [currentSnapPoint, setCurrentSnapPoint] = useState(snapPoints.MID);
  const lastGestureState = useRef({ dy: 0 });

  // Determina o próximo ponto de snap com base na direção do movimento
  const getNextSnapPoint = (currentValue: any, direction: any) => {
    const snapPointValues = Object.values(snapPoints).sort((a, b) => a - b);

    if (direction < 0) {
      // Arrastando para cima
      const nextSnapPoint = snapPointValues.find(
        (point) => point < currentValue
      );
      return nextSnapPoint !== undefined ? nextSnapPoint : snapPointValues[0];
    } else {
      // Arrastando para baixo
      const nextSnapPoint = snapPointValues
        .reverse()
        .find((point) => point > currentValue);
      return nextSnapPoint !== undefined ? nextSnapPoint : snapPointValues[0];
    }
  };

  // Animação para mover o sheet para um ponto específico
  const snapTo = (point: any) => {
    setCurrentSnapPoint(point);
    Animated.spring(translateY, {
      toValue: point,
      tension: 50,
      friction: 10,
      useNativeDriver: true,
    }).start();
  };

  // Configuração do PanResponder para lidar com gestos
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        translateY.setOffset(translateY._value);
        translateY.setValue(0);
      },
      onPanResponderMove: (_, gestureState) => {
        // Limita o movimento para não ultrapassar os limites
        const newPosition = Math.max(
          snapPoints.MIN,
          Math.min(snapPoints.MAX, translateY._offset + gestureState.dy)
        );
        translateY.setValue(gestureState.dy);
        lastGestureState.current = gestureState;
      },
      onPanResponderRelease: (_, gestureState) => {
        translateY.flattenOffset();
        const currentPosition = translateY._value + translateY._offset;

        // Determina se o usuário está arrastando para cima ou para baixo
        const direction = gestureState.dy;

        // Se o movimento for rápido, considera como um "flick"
        if (Math.abs(gestureState.vy) > 0.5) {
          const targetPoint = direction < 0 ? snapPoints.MIN : snapPoints.MAX;
          snapTo(targetPoint);
        } else {
          // Caso contrário, vá para o próximo ponto de snap mais próximo
          const nextPoint = getNextSnapPoint(currentPosition, direction);
          snapTo(nextPoint);
        }
      },
    })
  ).current;

  // Inicializa o componente no ponto médio
  useEffect(() => {
    snapTo(snapPoints.MID);
  }, []);

  // Calcula o índice da opacidade dinâmica com base na posição atual
  const opacity = translateY.interpolate({
    inputRange: [snapPoints.MIN, snapPoints.MAX],
    outputRange: [1, 0.3],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      {/* Conteúdo principal do aplicativo */}

      {/* Bottom Sheet */}
      <Animated.View
        style={[
          styles.bottomSheet,
          {
            transform: [{ translateY }],
          },
        ]}
      >
        {/* Barra de arrasto */}
        <View style={styles.dragHandle} {...panResponder.panHandlers}>
          <View style={styles.dragIndicator} />
        </View>

        {/* Conteúdo do bottom sheet */}
        <View style={styles.content}>
          <View style={styles.contentAdd}>
            <Animated.Text style={[styles.title, { opacity }]}>
              Add atividade
            </Animated.Text>
            <Image
              source={require("@/assets/addIcon.png")}
              style={styles.iconAdd}
            />
          </View>

          {/* Conteúdo que aparece conforme arrasta para cima */}
          <Animated.View style={[styles.expandableContent, { opacity }]}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Informação 1</Text>
              <Text style={styles.infoDesc}>
                Descrição detalhada da informação 1
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Informação 2</Text>
              <Text style={styles.infoDesc}>
                Descrição detalhada da informação 2
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Informação 3</Text>
              <Text style={styles.infoDesc}>
                Descrição detalhada da informação 3
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Informação 4</Text>
              <Text style={styles.infoDesc}>
                Descrição detalhada da informação 4
              </Text>
            </View>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.purpleD,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.purpleD,
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -20, // Adiciona um espaço extra para permitir arrastar abaixo da tela
    backgroundColor: Colors.light.purpleD,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    paddingBottom: 40, // Espaço extra para o conteúdo
  },
  dragHandle: {
    width: "100%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  dragIndicator: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: Colors.light.purpleB,
    marginVertical: 10,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  expandableContent: {
    marginTop: 10,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: Colors.light.purpleG,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoDesc: {
    fontSize: 14,
    color: "#666",
  },
  iconAdd: {
    width: 30,
    resizeMode: "contain",
    height: 30,
  },
  contentAdd: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BottomSheet;
