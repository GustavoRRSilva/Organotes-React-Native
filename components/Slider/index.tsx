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
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import ModalComponent from "../Modal";
import TextInputComponent from "../TextInput";
import {
  BottomSheetProps,
  NewActivity,
  PendingActivity,
  PostActivity,
  PromisePendingActivity,
} from "@/types/types";
import { postPendingActivity } from "@/api/pendingActivity";
import { Alert } from "react-native";
import PendingActivityModal from "../PendingActivityModal";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export const BottomSheet = ({ data, subjectId }: BottomSheetProps) => {
  const [totalData, setTotalData] = useState(data);
  const [isModalvisible, setIsModalvisible] = useState<boolean>(false);
  const [newActivityName, setNewActivityName] = useState<string>("");
  const [newActivtyDesc, setNewActivityDesc] = useState<string>("");
  const [isPendingActivityInfosModalOpen, setIsPendingActivityInfosModalOpen] =
    useState<boolean>(false);
  // Alturas disponíveis para o bottom sheet
  const snapPoints = {
    MIN: SCREEN_HEIGHT * 0.1, // 10% da tela
    MID: SCREEN_HEIGHT * 0.4, // 40% da tela
    MAX: SCREEN_HEIGHT * 0.7, // 70% da tela
  };

  const translateY: any = useRef(new Animated.Value(snapPoints.MID)).current;
  const [currentSnapPoint, setCurrentSnapPoint] = useState(snapPoints.MID);
  const lastGestureState = useRef({ dy: 0 });
  const handleSubmitNewPendingActivity = () => {
    const newActivityInfos: PostActivity = {
      data: {
        name: newActivityName,
        description: newActivtyDesc,
        percentageConclud: 0,
      },
      subjectId,
    };
    postPendingActivity(newActivityInfos)
      .then((promise: PromisePendingActivity) => {
        Alert.alert("Sucesso", "Atividade criada com sucesso!", [
          {
            text: "Ciente",
            style: "default",
          },
        ]);
        setTotalData((prev) => [...prev, promise.newActivity]);
      })
      .catch((error) =>
        Alert.alert("Erro ao criar", error.message, [
          {
            text: "Certo",
            style: "destructive",
          },
        ])
      );
  };
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

            <Pressable onPress={() => setIsModalvisible(true)}>
              <Image
                source={require("@/assets/addIcon.png")}
                style={styles.iconAdd}
              />
            </Pressable>
          </View>

          {/* Conteúdo que aparece conforme arrasta para cima */}
          <Animated.View style={[styles.expandableContent, { opacity }]}>
            {data ? (
              totalData.map((item, index) => (
                <View style={styles.infoBox} key={index}>
                  <Pressable
                    onPress={() => setIsPendingActivityInfosModalOpen(true)}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={
                          item.percentageConclud != 100
                            ? require("@/assets/checkActivity.png")
                            : require("@/assets/checkActivityComplete.png")
                        }
                        style={{ width: 20, height: 20, marginRight: 10 }}
                      />
                      <View>
                        <Text style={styles.infoTitle}>{item.name}</Text>
                        <View
                          style={{
                            width: 200,
                            height: 5,
                            backgroundColor: Colors.light.purpleB,
                          }}
                        >
                          <View
                            style={{
                              width: item.percentageConclud * 2,
                              height: 5,
                              backgroundColor:
                                item.percentageConclud > 0 &&
                                item.percentageConclud < 50
                                  ? "red"
                                  : item.percentageConclud >= 50 &&
                                    item.percentageConclud <= 99
                                  ? "#F09D3F"
                                  : "#2D9624",
                            }}
                          ></View>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                  <View
                    style={{
                      marginLeft: 10,
                      borderWidth: 2,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                      borderColor: Colors.light.purpleB,
                      borderRadius: 5,
                    }}
                  >
                    <Text>{item.percentageConclud}%</Text>
                  </View>
                  <PendingActivityModal
                    isModalvisible={isPendingActivityInfosModalOpen}
                    setIsModalVisible={setIsModalvisible}
                    pendingActivityId={item.id}
                  />
                </View>
              ))
            ) : (
              <Text>Sem atividades ainda, que tal criar uma?</Text>
            )}
          </Animated.View>
        </View>
      </Animated.View>
      <ModalComponent
        isModalvisible={isModalvisible}
        setIsModalVisible={setIsModalvisible}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Adicione uma atividade
        </Text>
        <View style={{ gap: 4 }}>
          <TextInputComponent
            placeholder="Nome da Atividade"
            setValue={setNewActivityName}
            value={newActivityName}
          />
          <TextInputComponent
            placeholder="Descrição da Atividade"
            setValue={setNewActivityDesc}
            value={newActivtyDesc}
          />
          <Pressable onPress={handleSubmitNewPendingActivity}>
            <View
              style={{
                width: "80%",
                marginHorizontal: "auto",
                backgroundColor: Colors.light.purpleB,
                padding: 4,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 17,
                }}
              >
                Adicionar
              </Text>
            </View>
          </Pressable>
        </View>
      </ModalComponent>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    width: 20,
    resizeMode: "contain",
    height: 20,
    marginLeft: 5,
    marginTop: 2,
  },
  contentAdd: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BottomSheet;
