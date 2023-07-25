import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require("C:/Users/admind/OneDrive - The University of Technology/Desktop/Unihack2023/assets/main.png")}
      resizeMode="cover" // Change resizeMode to "contain"
      style={styles.image}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.infoName}>
          Plant a tree
          <Text style={styles.infohighlight}> & {"\n"}</Text>
          <Text>save our planet</Text>
        </Text>
        <Text style={styles.info}>
          One planted tree cost you nothing but can really help to cure the
          Earth
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("tab")}
        >
          <Text style={styles.buttonText}>Bắt đầu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingBottom: 50,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#98b66e",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  infoContainer: {
    gap: 10,
    alignItems: "center",
    marginHorizontal: 60,
    marginTop: "auto",
  },
  infoName: {
    fontSize: 28,
    color: "white",
    fontWeight: 500,
    textAlign: "center",
    letterSpacing: 0.4,
  },
  info: {
    color: "#98b66e",
    textAlign: "center",
    letterSpacing: 0.4,
  },
  infohighlight: {
    color: "#98b66e",
  },
});

export default Home;
