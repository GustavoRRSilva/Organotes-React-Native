import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="auth/login/Login" options={{ title: "Login" }} />
      <Stack.Screen
        name="introduction/Index"
        options={{ title: "Introduction" }}
      />
    </Stack>
  );
}
