import { getUserProfile } from "@/api/user";
import Header from "@/components/Header";
import Colors from "@/constants/Colors";
import { UserData } from "@/types/types";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function userInfos() {
  const [userData, setUserData] = useState<UserData | null>();
  useEffect(() => {
    getUserProfile()
      .then((data) => setUserData(data))
      .catch((error) => console.log(error));
  });

  return (
    <SafeAreaView style={{ backgroundColor: Colors.light.background, flex: 1 }}>
      <View className="px-4">
        <Header />
        {userData && (
          <View className="mt-6 space-y-4">
            {/* Nome */}
            <View className="mb-4">
              <Text
                className="text-base font-medium mb-2"
                style={{ color: Colors.light.purpleA }}
              >
                Nome
              </Text>
              <View
                className="px-4 py-3 rounded-lg border"
                style={{
                  backgroundColor: Colors.light.purpleF,
                  borderColor: Colors.light.purpleD,
                }}
              >
                <Text
                  className="text-base"
                  style={{ color: Colors.light.text }}
                >
                  {userData.name}
                </Text>
              </View>
            </View>

            {/* Email */}
            <View className="mb-4">
              <Text
                className="text-base font-medium mb-2"
                style={{ color: Colors.light.purpleA }}
              >
                Email
              </Text>
              <View
                className="px-4 py-3 rounded-lg border"
                style={{
                  backgroundColor: Colors.light.purpleF,
                  borderColor: Colors.light.purpleD,
                }}
              >
                <Text
                  className="text-base"
                  style={{ color: Colors.light.text }}
                >
                  {userData.email}
                </Text>
              </View>
            </View>

            {/* Celular */}
            <View className="mb-4">
              <Text
                className="text-base font-medium mb-2"
                style={{ color: Colors.light.purpleA }}
              >
                Celular
              </Text>
              <View
                className="px-4 py-3 rounded-lg border"
                style={{
                  backgroundColor: Colors.light.purpleF,
                  borderColor: Colors.light.purpleD,
                }}
              >
                <Text
                  className="text-base"
                  style={{ color: Colors.light.text }}
                >
                  {userData.cellphoneNumber}
                </Text>
              </View>
            </View>

            {/* Receber Notificações */}
            <View className="mb-4">
              <Text
                className="text-base font-medium mb-2"
                style={{ color: Colors.light.purpleA }}
              >
                Receber Notificações
              </Text>
              <View
                className="px-4 py-3 rounded-lg border"
                style={{
                  backgroundColor: Colors.light.purpleF,
                  borderColor: Colors.light.purpleD,
                }}
              >
                <Text
                  className="text-base"
                  style={{ color: Colors.light.text }}
                >
                  {userData.receiveNotify ? "Sim" : "Não"}
                </Text>
              </View>
            </View>

            {/* Criado em */}
            <View className="mb-4">
              <Text
                className="text-base font-medium mb-2"
                style={{ color: Colors.light.purpleA }}
              >
                Criado em
              </Text>
              <View
                className="px-4 py-3 rounded-lg border"
                style={{
                  backgroundColor: Colors.light.purpleF,
                  borderColor: Colors.light.purpleD,
                }}
              >
                <Text
                  className="text-base"
                  style={{ color: Colors.light.text }}
                >
                  {new Date(userData.created_at).toLocaleDateString("pt-BR")}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
