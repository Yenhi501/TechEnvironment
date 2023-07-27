import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LogBox, Platform, Text, View } from "react-native";
import Home from "../screens/Home";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import SuggestionScreen from "../screens/SuggestionScreen";
import { themeColors } from "../theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ChartPieIcon as ChartOutline,
  HomeIcon as HomeOutline,
  PencilSquareIcon as PencilSquareOutline,
  QueueListIcon as QueueListOutline,
  UserIcon as UserOutline,
} from "react-native-heroicons/outline";
import {
  ChartPieIcon as ChartPieSolid,
  HomeIcon as HomeSolid,
  PencilSquareIcon as PencilSquareSolid,
  QueueListIcon as QueueListSolid,
  UserIcon as UserSolid,
} from "react-native-heroicons/solid";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == "ios";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
        initialRouteName="init"
      >
        <Stack.Screen
          name="init"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="tab"
          options={{ headerShown: false }}
          component={HomeTabs}
        />

        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={ProductScreen}
        />
        <Stack.Screen
          name="suggest"
          options={{ headerShown: false }}
          component={SuggestionScreen}
        />
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
        },
        tabBarItemStyle: {
          marginTop: ios ? 30 : 0,
        },
      })}
    >
      <Tab.Screen name="list" component={HomeScreen} />
      <Tab.Screen name="chart" component={HomeScreen} />
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="suggest" component={SuggestionScreen} />
      <Tab.Screen name="user" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;

  if (route.name === "home") {
    icon = focused ? (
      <View
        style={{
          padding: 20,
          backgroundColor: "#eaf0e2",
          borderRadius: 100,
          marginBottom: 38,
        }}
      >
        <HomeSolid size="25" color={themeColors.bgLight} />
      </View>
    ) : (
      <View
        style={{
          padding: 20,
          backgroundColor: "#eaf0e2",
          borderRadius: 100,
          marginBottom: 40,
        }}
      >
        <HomeOutline size="26" strokeWidth={1.5} color="#000" />
      </View>
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
  let label = route.name.charAt(0).toUpperCase() + route.name.slice(1);
  return (
    <View style={{ alignItems: "center" }}>
      <View style={"flex items-center rounded-full p-4 " + buttonClass}>
        {icon}
      </View>
      <Text
        style={{
          color: focused ? "#779350" : "black",
          fontSize: 12,
          marginTop: 4,
        }}
      >
        {label}
      </Text>
    </View>
  );
};
