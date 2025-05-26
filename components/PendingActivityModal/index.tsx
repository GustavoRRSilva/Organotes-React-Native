import { Text, View } from "react-native";
import ModalComponent from "../Modal";
import React, { useEffect, useState } from "react";
import { PendingActivity, PendingActivityModalProps } from "@/types/types";
import { Alert } from "react-native";
import { Loading } from "../Loading/Loading";
import { getPendingActivity } from "@/api/pendingActivity";

export default function PendingActivityModal({
  isModalvisible,
  setIsModalVisible,
  pendingActivityId,
}: PendingActivityModalProps) {
  const [pendingActivity, setPendingActivity] = useState<PendingActivity>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetPendingActivityInfos = async () => {
    getPendingActivity(pendingActivityId)
      .catch((data: PendingActivity) => {
        setPendingActivity(data);
        console.log(data);
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

  useEffect(() => {
    handleGetPendingActivityInfos();
  }, []);
  return (
    <ModalComponent
      isModalvisible={isModalvisible}
      setIsModalVisible={setIsModalVisible}
    >
      {pendingActivity ? (
        <View>
          <Text>{pendingActivity.name}</Text>
          <Text>{pendingActivity.description}</Text>
          <Text>{pendingActivity.percentageConclud}</Text>
        </View>
      ) : (
        <Loading />
      )}
    </ModalComponent>
  );
}
