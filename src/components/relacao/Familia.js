import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import estilo from "../estilo";

export default props => {
  return (
    <>
      <Text style={estilo.txtG}>[Início] Membros da Família</Text>
      {props.children}
      <Text style={estilo.txtG}>[Fim] Membros da Família</Text>
    </>
  );
};
