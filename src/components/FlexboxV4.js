import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";

export default props => {
  return (
    <View style={style.FlexV4}>
      <View style={style.FlexV0}>
        <Text>V0</Text>
      </View>
      <View style={style.FlexV1}>
        <Text>V1</Text>
      </View>
      <View style={style.FlexV2}>
        <Text>V2</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  FlexV0: {
    height: 300,
    backgroundColor: "#36c9a7",
  },
  FlexV1: {
    flexGrow: 1,
    backgroundColor: "#ff801a",
  },
  FlexV2: {
    flexGrow: 1,
    backgroundColor: "#dd22c1",
  },
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: "#000",
  },
});
