import React from "react";
import {Button, Text} from "react-native";

export default props => {
  function executar() {
    console.warn("Exec!!");
  }

  return (
    <Text>
      <Button title="Executar #01!" onPress={executar} />;
      <Button
        title="Executar #02!"
        onPress={function () {
          console.warn("Exec #02");
        }}
      />
      ;
    </Text>
  );
};
