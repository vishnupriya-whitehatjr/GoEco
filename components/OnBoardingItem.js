import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

export default OnBoardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.25 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAE01D",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 0.3,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "AmericanTypewriter-CondensedBold",
  },
  description: {
    padding: "10%",
    color: "#fff",
    textAlign: "justify",
    fontFamily: "Avenir-HeavyOblique",
    fontSize: 15,
  },
});
