import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import estilo from "../estilo";

export default props => {
  return (
    <>
      <Text>
        {props.nome} {props.sobreNome}
      </Text>
    </>
  );
};
