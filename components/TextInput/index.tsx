import Colors from "@/constants/Colors";
import { TextInputProps } from "@/types/types";
import React from "react";
import { TextInput, View } from "react-native";

export default function TextInputComponent({
  placeholder,
  value,
  setValue,
}: TextInputProps) {
  return (
    <View
      style={{
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.light.purpleC,
        backgroundColor: Colors.light.purpleE,
      }}
    >
      <TextInput
        placeholder={placeholder}
        style={{ fontSize: 14, color: "#000" }}
        className="placeholder:text-black opacity-50 py-2 px-2"
        value={value}
        onChangeText={(e) => setValue(e)}
      />
    </View>
  );
}
