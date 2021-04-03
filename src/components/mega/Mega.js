import React, {Component} from "react";
import {Text, TextInput, Button, View} from "react-native";
import estilo from "../estilo";
import NumeroMega from "./NumeroMega";

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQuantidadeNumero = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({numeros});
  };

  gerarNumerosV2 = () => {
    const qtdeNumeros = this.state.qtdeNumeros;
    const numeros = [];
    for (let i = 0; i < qtdeNumeros; i++) {
      const n = this.gerarNumeroNaoContido(numeros);
      numeros.push(n);
    }
    numeros.sort((a, b) => a - b);
    this.setState({numeros});
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return <NumeroMega key={num} num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={estilo.txtG}>
          Gerador de Mega-Sena
          {this.state.qtdeNumeros}
        </Text>
        <TextInput
          keyboardType={"numeric"}
          style={{borderBottomWidth: 1}}
          placeholder="Quantidade de Números"
          value={this.state.qtdeNumeros}
          onChangeText={this.alterarQuantidadeNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumerosV2} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}>
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
