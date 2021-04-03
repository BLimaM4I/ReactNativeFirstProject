import React from "react";
import {Text} from "react-native";
import Estilo from "./estilo";

export default ({min, max}) => {
  const aleatorio = Math.floor(Math.random() * max) + min;
  return (
    <Text style={Estilo.txtG}>
      O número aleatório entre {min} e {max} é {aleatorio}
    </Text>
  );
};
