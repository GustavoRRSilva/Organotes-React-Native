import BackArrow from "@/components/BackArrow/BackArrow";
import InputText from "@/components/InputText";
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [loginInput, setLoginInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [thereIsError, setThereIsError] = useState<boolean>(false);
  const handleSubmit = () => {
    if (!loginInput || !passwordInput) {
      setThereIsError(true);
      return Alert.alert(
        "Campo(s) não preenchido(s)",
        "Todos os campos devem ser preenchidos.",
        [
          {
            text: "Ciente",
            style: "default",
          },
        ]
      );
    }
    setThereIsError(false);
  };

  console.log(loginInput, passwordInput);
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/iconTopLogin.png")}
        className="absolute right-0"
      />
      <SafeAreaView>
        <View className="pt-14 m-auto w-[100%] flex ">
          <BackArrow />
          <Text className="text-4xl font-bold mt-6">Sign in</Text>
          <Text className="text-lg font-semibold line leading-[1] mt-1	 ">
            Transforme seus estudos com mais organização e foco
          </Text>
          <View className=" ">
            <View className="mt-10  ">
              <Text className="text-xl">Email</Text>
              <View
                className={`w-full bg-[#E3E5F2] h-14 mt-1 rounded-[5px] border-2 ${
                  thereIsError ? "border-red-300" : "border-[#CACCE5]"
                } relative`}
              >
                <TextInput
                  className="px-2 w-full h-14"
                  onChangeText={(e) => setLoginInput(e)}
                  value={loginInput}
                />
                <Image
                  source={require("@/assets/emailIcon.png")}
                  className="absolute right-0 top-[25%] mr-[10px]"
                />
              </View>
            </View>
            <View className="mt-6">
              <Text className="text-xl">Senha</Text>
              <View
                className={`w-full bg-[#E3E5F2] h-14 mt-1 rounded-[5px] border-2 ${
                  thereIsError ? "border-red-300" : "border-[#CACCE5]"
                } relative`}
              >
                <TextInput
                  className="px-2 w-full h-14"
                  secureTextEntry={!isPasswordVisible}
                  onChangeText={(e) => setPasswordInput(e)}
                  value={passwordInput}
                />
                <Pressable
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute right-0 top-[25%] mr-[10px]"
                >
                  {isPasswordVisible ? (
                    <Image source={require("@/assets/eyeOpenIcon.png")} />
                  ) : (
                    <Image source={require("@/assets/eyeClosedIcon.png")} />
                  )}
                </Pressable>
              </View>
            </View>
            <Text className="mt-2 font-bold text-right   text-lg underline">
              Esqueceu a senha?
            </Text>
            <Pressable onPress={handleSubmit}>
              <View className="w-full max-w-[120px] bg-[#434561] py-2 px-2 rounded-[7px] ">
                <Text className="text-white text-center text-xl font-bold">
                  Login
                </Text>
              </View>
            </Pressable>
            <Image
              source={require("@/assets/iconLogin.png")}
              alt="Mulher olhando uma tela de dados "
              className="mt-10 w-full max-w-72 resize-x mx-auto"
              style={{ resizeMode: "contain" }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
});
