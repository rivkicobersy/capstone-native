import axios from "axios";
import { useEffect, useState } from "react";
// import Button from "./components/Button";

export default function IngredientsIndex() {
  const [ingredients, setIngredients] = useState([]);

  const handleIndexIngredients = () => {
    const baseUrl = "http://localhost:3000";
    axios.get(`${baseUrl}/ingredients`).then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  useEffect(handleIndexIngredients, []);

  return (
    <View style={styles.container}>
      {ingredients.map((ingredient) => (
        <View style={styles.container} key={ingredient.id}>
          <Text style={{ color: "#fff", fontSize: 50, justifyContent: "center" }}>{ingredient.name}</Text>
          <Image source={ingredient.image_url} style={{ width: 400, height: 400 }}></Image>
          <View style={styles.footerContainer}>
            {/* <Button style={{ color: "#007AFF" }} label="more info" /> */}
            {/* <Button label="Use this photo" /> */}
          </View>
        </View>
      ))}
      {/* <ImageViewer /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
