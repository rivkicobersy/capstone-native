import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource }) {
  return (
    <Image
      source={{
        uri: "https://thumbs.dreamstime.com/b/vector-fast-food-pattern-vector-fast-food-pattern-fast-food-seamless-background-113560536.jpg",
      }}
      style={{ width: 400, height: 400 }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
