import React from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import estilo from "../estilo";
import produtos from "./produtos";

export default props => {
  const produtoRender = ({item: p}) => {
    return (
      <Text>
        {p.id} {p.nome} - R${p.preço}
      </Text>
    );
  };
  return (
    <>
      <Text style={estilo.txtG}>Lista de Produtos V2</Text>
      <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={produtoRender}
      />
    </>
  );
};
