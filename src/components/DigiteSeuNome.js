import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

export default props => {
  const [nome, setNome] = useState("Teste");
  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
    </View>
  );
};
