import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import estilo from "../estilo";
import produtos from "./produtos";

export default props => {
  function obterLista() {
    return produtos.map(p => {
      return (
        <Text key={p.id}>
          {p.id}) {p.nome} custa R$ {p.preço}
        </Text>
      );
    });
  }

  return (
    <>
      <Text style={estilo.txtG}>Lista de Produtos</Text>
      {obterLista()}
    </>
  );
};
