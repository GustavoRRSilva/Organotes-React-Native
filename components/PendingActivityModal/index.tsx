import { Text, View } from "react-native";
import ModalComponent from "../Modal";
import React, { useEffect, useRef, useState } from "react";
import { PendingActivity, PendingActivityModalProps } from "@/types/types";
import { Alert } from "react-native";
import { Loading } from "../Loading/Loading";
import { getPendingActivity, putPendingActivity } from "@/api/pendingActivity";
import Colors from "@/constants/Colors";

import { TextInput } from "react-native";

export default function PendingActivityModal({
  isModalvisible,
  setIsModalVisible,
  pendingActivityId,
  onSaveComplete,
}: PendingActivityModalProps) {
  const [pendingActivity, setPendingActivity] = useState<PendingActivity>();
  const [loading, setLoading] = useState<boolean>(false);

  console.log(pendingActivityId);
  const [pendingActivityDescription, setPendingActivityDescription] =
    useState<string>("");
  const [
    pendingActivityPercentageConclud,
    setPendingActivityPercentageConclud,
  ] = useState<number>(0);

  const prevVisibleRef = useRef(isModalvisible);

  const handlePutPendingActivityInfos = () => {
    console.log("joined here");
    putPendingActivity(pendingActivityId, {
      description: pendingActivityDescription,
      percentageConclud: pendingActivityPercentageConclud,
    })
      .then((data) => onSaveComplete())
      .catch((e) => console.log(e))
      .finally();
  };

  console.log(isModalvisible);
  useEffect(() => {
    if (prevVisibleRef.current && !isModalvisible) {
      // modal foi fechado
      handlePutPendingActivityInfos();
    }

    prevVisibleRef.current = isModalvisible;
  }, [isModalvisible]);

  const handleGetPendingActivityInfos = async () => {
    getPendingActivity(pendingActivityId)
      .then((data: PendingActivity) => {
        setPendingActivity(data);
        setPendingActivityDescription(data.description);
        setPendingActivityPercentageConclud(data.percentageConclud);
        console.log("infos: " + data);
      })
      .catch((error) =>
        Alert.alert("Erro ao obter informações", error, [
          {
            text: "Ciente",
            style: "destructive",
          },
        ])
      );
  };

  console.log(pendingActivity?.description);

  useEffect(() => {
    handleGetPendingActivityInfos();
  }, [pendingActivityId]);
  return (
    <ModalComponent
      isModalvisible={isModalvisible}
      setIsModalVisible={() => {
        setIsModalVisible(false);
        handlePutPendingActivityInfos();
      }}
      onDismiss={handlePutPendingActivityInfos}
    >
      {pendingActivity ? (
        <View>
          <Text
            className={`text-center text-xl rounded-md py-1 font-semibold border-2`}
            style={{
              backgroundColor: Colors.light.purpleD,
              borderColor: Colors.light.purpleB,
            }}
          >
            {pendingActivity.name}
          </Text>
          <TextInput
            value={pendingActivityDescription}
            onChangeText={(e) => setPendingActivityDescription(e)}
            placeholder="Descrição da sua atividade"
            multiline={true}
            textAlignVertical="top"
            className="mt-4 p-2 text-lg max-w-full rounded-lg border-2"
            style={{
              backgroundColor: Colors.light.purpleE,
              borderColor: Colors.light.purpleC,
            }}
          />
          <TextInput
            className="text-center mt-2 text-xl py-1 rounded-md border-2 w-fit"
            multiline={true}
            textAlignVertical="top"
            inputMode="numeric"
            keyboardType="numeric"
            value={String(pendingActivityPercentageConclud)}
            onChangeText={(e) => {
              setPendingActivityPercentageConclud(Number(e));
            }}
            style={{
              backgroundColor: Colors.light.purpleE,
              borderColor: Colors.light.purpleC,
            }}
          />
        </View>
      ) : (
        <Loading />
      )}
    </ModalComponent>
  );
}
