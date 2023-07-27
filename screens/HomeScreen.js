import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BellAlertIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import CoffeeCard from "../components/coffeeCard";
import { coffeeItems } from "../constants";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
export default function HomeScreen(r) {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <SafeAreaView className={ios ? "-mb-8" : ""}>
        {/* avatar and bell icon */}
        <View className="mx-4 mt-2 flex-row justify-between items-center">
          <Image
            source={require("../assets/images/avatar.png")}
            className="h-10 w-10 rounded-full"
          />
          <BellAlertIcon size="28" color="#155344" />
        </View>
      </SafeAreaView>

      {/* item cards */}
      <View
        className={`overflow-visible flex justify-center flex-1 ${
          ios ? "mt-10" : ""
        }`}
      >
        <View>
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.6}
            sliderWidth={width}
            itemWidth={width * 0.67}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Plant delecious tree</Text>
          <Text style={styles.info}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 45,
    gap: 10,
    marginHorizontal: 50,
  },
  title: {
    fontSize: 28,
    color: "#50683a",
    fontWeight: 500,
  },
  info: {
    textAlign: "center",
    color: "#7e9960",
    fontSize: 14,
    letterSpacing: 0.8,
  },
});
