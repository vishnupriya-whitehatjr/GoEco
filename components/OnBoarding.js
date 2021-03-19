import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import instructions from "../instructions";
import OnBoardingItem from "../components/OnBoardingItem";
export default class OnBoarding extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={instructions}
          renderItem={({ item }) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ACAE29",
    alignItems: "center",
    justifyContent: "center",
  },
});
