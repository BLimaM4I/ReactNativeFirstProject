import React from "react";
import {View, StyleSheet, SafeAreaView} from "react-native";

// import ContadorV2 from "./components/contador/ContadorV2";
// import Diferenciar from "./components/Diferenciar";
// import Pai from "./components/indireta/Pai";
// import Pai from "./components/direta/Pai";
// import Contador from "./components/Contador";
// import MinMax from "./components/MinMax";
// import Aleatorio from "./components/Aleatorio";
// import Titulo from "./components/Titulo";
// import Botao from "./components/Botao";
// import CompPadrao, {Comp1, Comp2} from "./components/Multi";
// import Primeiro from "./components/Primeiro";
// import RCTSafeAreaViewNativeComponent from "react-native/Libraries/Components/SafeAreaView/RCTSafeAreaViewNativeComponent";
// import Parimpar from "./components/Parimpar";
// import Pai from "./components/relacao/Familia";
// import Familia from "./components/relacao/Familia";
// import Membro from "./components/relacao/Membro";
// import UsuarioLogado from "./components/UsuarioLogado";
// import ListaProdutos from "./components/produtos/ListaProdutos";
// import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
// import DigiteSeuNome from "./components/DigiteSeuNome";
// import Quadrado from "./layout/Quadrado";
// import FlexboxV4 from "./components/FlexboxV4";
import Mega from "./components/mega/Mega";

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <Mega qtdeNumeros={12} />
    </SafeAreaView>
  );
  {
    /*
      <DigiteSeuNome />
      <ListaProdutosV2 />
      <ListaProdutos />
      <UsuarioLogado usuario={{nome: "Gui", email: "gui@hotmail.com"}} />
      <UsuarioLogado usuario={{nome: "Ana", email2: "ana@hotmail.com"}} />
       <Familia>
        <Membro nome="Bia" sobreNome="Arruda" />
        <Membro nome="Carlos" sobreNome="Arruda" />
      </Familia>
      <Familia>
        <Membro nome="Ana" sobreNome="Silva" />
        <Membro nome="Julia" sobreNome="Silva" />
        <Membro nome="Rebeca" sobreNome="Silva" />
        <Membro nome="Gui" sobreNome="Silva" />
      </Familia>
      <ContadorV2 />
      <Diferenciar />
      <Parimpar num={3} />
      <Pai />
      <Titulo
        principal="Cadastro Produto"
        secundario="Tela de Cadastro do Produto"
      />
      <Botao />
      <MinMax min={3} max={20} />
      <Aleatorio min={1} max={10} />
      <CompPadrao />
      <Comp1 />
      <Primeiro />*/
  }
};

const style = StyleSheet.create({
  App: {
    fontSize: 24,
    flexGrow: 1,
    backgroundColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
