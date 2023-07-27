import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import { themeColors } from "../theme";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

export default function CoffeeCard({ item }) {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: themeColors.bgDark,
          height: ios ? height * 0.4 : height * 0.56,
          width: width * 0.7,
          marginBottom: 150,

          position: "relative",
        }}
      >
        <Image
          source={item.image}
          style={{ flex: 1, borderRadius: 20, width: "100%", zIndex: 1 }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Product", { ...item })}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "95%",
            left: "50%",
            marginLeft: -25,
            zIndex: 2,
          }}
        >
          <Image
            source={require("../assets/icon-main.png")}
            className="h-6 w-6 mb-2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
