import React, {useState, Fragment} from "react";
import {View, Text, StyleSheet} from "react-native";
import estilo from "../estilo";
import ContadorDisplay from "./ContadorDisplay";
import ContadorBotoes from "./ContadorBotoes";

export default props => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={estilo.txtG}> Contador </Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  );
};
