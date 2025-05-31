import { getAllUserInfos } from "@/api/user";
import ActivitiesInfosHead from "@/components/ActivitiesInfosHead";
import BottomMenu from "@/components/BottomMenu";

import Header from "@/components/Header";
import { Loading } from "@/components/Loading/Loading";
import { BottomSheet } from "@/components/Slider";
import Colors from "@/constants/Colors";
import { ActivitiesPage } from "@/types/types";
import React, { useEffect, useState } from "react";

import { SafeAreaView, Text, View } from "react-native";

export default function activiesPage() {
  const [user, setUser] = useState<ActivitiesPage>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllUserInfos()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.error("Error", err))
      .finally(() => {
        // Adiciona 1 segundo de delay antes de setar loading = false

        setLoading(false);
      });
  }, []);

  const [selectedPiece, setSelectedPiece] = useState<string>("");
  const filteredActivities =
    user && user.subjects.find((item) => item.title == selectedPiece);
  if (loading && !user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }
  return (
    <SafeAreaView className="px-2">
      <Header />
      <ActivitiesInfosHead setSelectedPice={setSelectedPiece} />

      {user && (
        <BottomSheet
          data={
            filteredActivities?.pendingActivities ||
            user.subjects[0].pendingActivities
          }
          subjectId={filteredActivities?.id || user.subjects[0].id}
        />
      )}

      {/* <BottomMenu /> */}
    </SafeAreaView>
  );
}
