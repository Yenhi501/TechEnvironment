import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function FavouriteScreen(props) {
  const item = props.route.params;
  const [size, setSize] = useState("small");
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity
            className=" rounded-full "
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftCircleIcon size="30" strokeWidth={1} color="#000" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={item.image}
            className="h-80 w-80"
            style={{ marginTop: -6 }}
          />
        </View>
        <View className="px-4 flex-row justify-between items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            {item.name}
          </Text>
        </View>
        <View className="px-4 space-y-2">
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-bold"
          >
            Choose
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => setSize("small")}
              style={{
                backgroundColor:
                  size == "small" ? themeColors.bgLight : "rgba(0,0,0,0.07)",
              }}
              className="p-3 px-7 rounded-full"
            >
              <Text
                className={size == "small" ? "text-white" : "text-gray-700"}
              >
                Thông tin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("medium")}
              style={{
                backgroundColor:
                  size == "medium" ? themeColors.bgLight : "rgba(0,0,0,0.07)",
              }}
              className="p-3 px-7 rounded-full"
            >
              <Text
                className={size == "medium" ? "text-white" : "text-gray-700"}
              >
                Quy trình
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("large")}
              style={{
                backgroundColor:
                  size == "large" ? themeColors.bgLight : "rgba(0,0,0,0.07)",
              }}
              className="p-3 px-7 rounded-full"
            >
              <Text
                className={size == "large" ? "text-white" : "text-gray-700"}
              >
                Ví dụ
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-4 space-y-2">
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-bold"
          >
            About
          </Text>
          <Text className="text-gray-600">{item.desc}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
