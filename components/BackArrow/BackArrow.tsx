import { useRouter } from "expo-router";
import { Image, Pressable } from "react-native";

export default function BackArrow() {
  const router = useRouter();

  const backRoute = () => router.back();
  return (
    <Pressable onPress={() => backRoute}>
      <Image style={{ width: 20 }} source={require("@/public/backArrow.png")} />
    </Pressable>
  );
}
