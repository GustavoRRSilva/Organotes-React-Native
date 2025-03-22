import { Image, TextInput, View } from "react-native";

interface InputTextProps {
  detailImgSource?: string;
  detailImgAlt?: string;
  placeholder: string;
}

export default function InputText({
  detailImgSource,
  detailImgAlt,
  placeholder,
}: InputTextProps) {
  return (
    <View>
      <TextInput placeholder={placeholder} />
      {detailImgSource && (
        <Image source={require(detailImgSource)} alt={detailImgAlt} />
      )}
    </View>
  );
}
