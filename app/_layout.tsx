import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="auth/login/Login" options={{ title: "Login" }} />
      <Stack.Screen
        name="introduction/Index"
        options={{ title: "Introduction" }}
      />
    </Stack>
  );
}
