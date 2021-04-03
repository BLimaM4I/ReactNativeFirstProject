import React from "react";
import {View, Text, Button, StyleSheet, Platform} from "react-native";

export default props => {
  if (Platform.OS === "android") {
    return <Text>Android</Text>;
  } else if (Platform.OS === "ios") {
    return <Text>iOS</Text>;
  } else {
    return <Text>{Platform.OS}</Text>;
  }
};
