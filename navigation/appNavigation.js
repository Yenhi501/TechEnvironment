import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Home from "../screens/Home";
import { Dimensions, LogBox, Platform, Text, View } from "react-native";
// import ProductScreen from "../screens/ProductScreen";
import { themeColors } from "../theme";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon as HomeOutline,
  UserIcon as UserOutline,
  PencilSquareIcon as PencilSquareOutline,
  ChartPieIcon as ChartOutline,
  QueueListIcon as QueueListOutline,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  UserIcon as UserSolid,
  PencilSquareIcon as PencilSquareSolid,
  ChartPieIcon as ChartPieSolid,
  QueueListIcon as QueueListSolid,
} from "react-native-heroicons/solid";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == "ios";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
        {/* <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={ProductScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          height: 75,
          alignItems: "center",
          // marginBottom: 24,
          // borderRadius: 100,
          // marginHorizontal: 24,
          // backgroundColor: themeColors.bgLight,
        },
        tabBarItemStyle: {
          marginTop: ios ? 30 : 0,
        },
      })}
    >
      <Tab.Screen name="list" component={HomeScreen} />
      <Tab.Screen name="chart" component={HomeScreen} />
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="suggest" component={HomeScreen} />
      <Tab.Screen name="user" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;

  if (route.name === "home") {
    icon = focused ? (
      <HomeSolid size="25" color={themeColors.bgLight} />
    ) : (
      <HomeOutline size="26" strokeWidth={1.5} color="#000" />
    );
  } else if (route.name === "user") {
    icon = focused ? (
      <UserSolid size="26" color={themeColors.bgLight} />
    ) : (
      <UserOutline size="26" strokeWidth={1.5} color="#000" />
    );
  } else if (route.name === "suggest") {
    icon = focused ? (
      <PencilSquareSolid size="26" color={themeColors.bgLight} />
    ) : (
      <PencilSquareOutline size="26" strokeWidth={1.5} color="#000" />
    );
  } else if (route.name === "chart") {
    icon = focused ? (
      <ChartPieSolid size="26" color={themeColors.bgLight} />
    ) : (
      <ChartOutline size="26" strokeWidth={1.5} color="#000" />
    );
  } else if (route.name === "list") {
    icon = focused ? (
      <QueueListSolid size="26" color={themeColors.bgLight} />
    ) : (
      <QueueListOutline size="26" strokeWidth={1.5} color="#000" />
    );
  }

  let buttonClass = focused ? "bg-white" : "";
  return (
    <View className={"flex items-center rounded-full p-4 " + buttonClass}>
      {icon}
    </View>
  );
};
