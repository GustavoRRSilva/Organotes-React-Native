import { getAllUserInfos } from "@/api/user";
import ActivitiesInfosHead from "@/components/ActivitiesInfosHead";
import BottomMenu from "@/components/BottomMenu";

import Header from "@/components/Header";
import { BottomSheet } from "@/components/Slider";
import Colors from "@/constants/Colors";
import { ActivitiesPage } from "@/types/types";
import React, { useEffect, useState } from "react";

import { SafeAreaView, Text } from "react-native";

export default function activiesPage() {
  const [user, setUser] = useState<ActivitiesPage>();

  useEffect(() => {
    getAllUserInfos()
      .then((user) => console.log("user:", setUser(user)))
      .catch((err) => console.error("Error", err));
  }, []);

  const [selectedPiece, setSelectedPiece] = useState<string>("");
  const filteredActivities =
    user && user.subjects.find((item) => item.title == selectedPiece);

  return (
    <SafeAreaView className="px-2">
      <Header />
      {user && <ActivitiesInfosHead setSelectedPice={setSelectedPiece} />}
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
