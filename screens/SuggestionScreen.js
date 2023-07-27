import React from "react";
import { View, StyleSheet, Image, SafeAreaView, Text } from "react-native";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BellAlertIcon } from "react-native-heroicons/outline";
import { FlatList } from "react-native";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function SuggestionScreen(r) {
  return (
    <View
      className="flex-1 relative bg-white"
      style={{ position: "relative", backgroundColor: "#f7f6f6" }}
    >
      <StatusBar />
      <SafeAreaView className={ios ? "-mb-8" : ""} style={styles.header}>
        {/* avatar and bell icon */}
        <View className="mx-4 mt-8 flex-row justify-between items-center">
          <Image
            source={require("../assets/images/avatar.png")}
            className="h-10 w-10 rounded-full"
          />
          <Text style={styles.title}>Device condition</Text>
          <BellAlertIcon size="28" color="#155344" />
        </View>
      </SafeAreaView>

      <View style={styles.container}>
        <View style={styles.body}></View>
        <View style={styles.list}>
          <Text style={styles.textfirst}>List Device</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.textsecond}>View All</Text>
        </View>
        <FlatList
          style={styles.FlatList}
          data={[1, 2]}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <View style={[styles.item, styles.card]}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/pic1.png")}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.cardContent}>{/* <Text>nhi</Text> */}</View>
            </View>
          )}
          contentContainerStyle={{
            justifyContent: "flex-end",
            flexGrow: 1,
            marginBottom: 28,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#69915A",
    height: 230,
  },
  title: {
    fontSize: 26,
    color: "white",
    fontWeight: 700,
    marginTop: 10,
  },
  view: {
    alignItems: "flex-end",
    marginRight: 40,
    top: "13.5%",
  },
  list: {
    alignItems: "flex-start",
    top: "18%",
    marginLeft: 40,
  },
  body: {
    position: "absolute",
    width: "90%",
    height: 180,
    backgroundColor: "white",
    top: -120,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 1.5,
  },
  textsecond: {
    fontWeight: 700,
    fontSize: 15,
  },
  textfirst: {
    letterSpacing: 0.3,
    color: "#515151",
    fontSize: 15,
  },
  container: {
    flex: 1,
    marginBottom: 36,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 25,
  },
  item: {
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 18,
    overflow: "hidden",
    shadowColor: "#171717",
    shadowOffset: { width: -2, peak: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    height: 140,
    marginHorizontal: 20,
  },
  cardContent: {
    alignItems: "flex-end",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 70,
  },
});
