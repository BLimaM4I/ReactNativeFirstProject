import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import estilo from "./estilo";
import Condicional from "./Condicional";

export default props => {
  const usuario = props.usuario || {};
  return (
    <>
      <Condicional teste={usuario && usuario.nome && usuario.email}>
        <Text style={estilo.txtG}>Usuário Logado:</Text>
        <Text style={estilo.txtG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </Condicional>
    </>
  );
};
