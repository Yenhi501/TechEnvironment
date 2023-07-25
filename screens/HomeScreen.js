import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { StatusBar } from "expo-status-bar";
import { categories, coffeeItems } from "../constants";
import Carousel from "react-native-snap-carousel";
import CoffeeCard from "../components/coffeeCard";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <SafeAreaView className={ios ? "-mb-8" : ""}>
        {/* avatar and bell icon */}
        <View className="mx-4 mt-2 flex-row justify-between items-center">
          <Image
            source={require("../assets/images/avatar.png")}
            className="h-11 w-11 rounded-full"
          />
          <BellIcon size="30" color="black" />
        </View>
      </SafeAreaView>

      {/* coffee cards */}
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
    letterSpacing: 1,
  },
});
