import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    SafeAreaView,
    Dimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import { LineChart, BarChart } from "react-native-chart-kit";

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider,
} from "react-native-popup-menu";

const CustomTabBar = ({ state, descriptors, navigation, position }) => {
    return (
        <SafeAreaView
            style={{
                backgroundColor: "#EAF0E2",
                marginTop: 50,
                marginHorizontal: 30,
                borderRadius: 70,
                paddingHorizontal: 5,
                paddingVertical: 5,
                overflow: "hidden",
            }}
        >
            <View style={{ borderRadius: 10 }}>
                <View
                    style={{
                        flexDirection: "row",
                        backgroundColor: "#EAF0E2", // Thay đổi màu nền theo ý muốn
                        gap: 10,
                    }}
                >
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel || options.title || route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: "tabPress",
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TouchableOpacity
                                key={route.key}
                                accessibilityRole="button"
                                accessibilityStates={
                                    isFocused ? ["selected"] : []
                                }
                                accessibilityLabel={
                                    options.tabBarAccessibilityLabel
                                }
                                onPress={onPress}
                                style={
                                    isFocused
                                        ? {
                                              flex: 1,
                                              alignItems: "center",
                                              padding: 5,
                                              borderTopWidth: 0,
                                              backgroundColor: "white", // Thay đổi màu đường viền theo ý muốn
                                              borderRadius: 50,
                                              shadowColor: "#000",
                                              shadowOffset: {
                                                  width: 0,
                                                  height: 5,
                                              },
                                              shadowOpacity: 0.41,
                                              shadowRadius: 9.11,
                                              elevation: 12,
                                              // Thay đổi màu đường viền theo ý muốn
                                          }
                                        : {
                                              flex: 1,
                                              alignItems: "center",
                                              padding: 5,
                                              borderTopWidth: 0,
                                              borderRadius: 50,
                                              backgroundColor: "transparent",
                                          }
                                }
                            >
                                <Text
                                    style={{
                                        color: "#435234",
                                    }}
                                >
                                    {label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    );
};

const Screen1 = () => {
    const [option, setOption] = useState("Theo tháng");

    return (
        <View
            style={{
                backgroundColor: "white",
                flex: 1,
                alignItems: "center",
                paddingTop: 20,
                paddingHorizontal: 20,
                position: "relative",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                    position: "absolute",
                    zIndex: 999,
                    width: "100%",
                    marginVertical: 30,
                }}
            >
                <Text
                    style={{ fontWeight: 500, fontSize: 20, marginTop: "auto" }}
                >
                    Biểu đồ thống kê
                </Text>

                <View
                    height={200}
                    style={{
                        position: "absolute",
                        zIndex: 999,
                        right: 0,
                    }}
                >
                    <MenuProvider
                        style={{
                            marginLeft: "auto",
                            justifyContent: "center",
                        }}
                    >
                        <Menu>
                            <MenuTrigger
                                text={`${option}`}
                                style={{
                                    paddingVertical: 8,
                                    paddingHorizontal: 12,
                                    marginTop: 5,
                                    backgroundColor: "#EAF0E2",
                                    fontWeight: 500,
                                    borderRadius: 50,
                                    shadowColor: "#000",
                                    elevation: 5,
                                    width: 150,
                                    textAlign: "center",
                                    alignItems: "center",
                                }}
                            />
                            <MenuOptions
                                optionsContainerStyle={{
                                    marginTop: 10,
                                    shadowColor: "#000",
                                    elevation: 5,
                                    textAlign: "center",
                                }}
                            >
                                <MenuOption
                                    text="Theo tháng"
                                    onSelect={() => setOption("Theo tháng")}
                                />
                                <MenuOption
                                    text="Theo tuần"
                                    onSelect={() => setOption("Theo tuần")}
                                />
                            </MenuOptions>
                        </Menu>
                    </MenuProvider>
                </View>
            </View>

            <BarChart
                data={{
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                    ],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                            ],
                        },
                    ],
                }}
                width={Dimensions.get("window").width - 30} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726",
                    },
                }}
                bezier
                style={{
                    marginVertical: 60,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};
const Screen2 = () => (
    <Text style={{ backgroundColor: "white", height: "100%", paddingTop: 20 }}>
        Screen 2
    </Text>
);

export const NavTop = ({ title1, title2, component1, component2 }) => {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            style={styles.container}
        >
            <Tab.Screen name="Độ ẩm đất" component={Screen1} />
            <Tab.Screen name="Độ pH đất" component={Screen2} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
});
