import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormDeNotas from "./components/FormDeNotas";

/*
State: Serve para guardar valores/estado que podem vir a mudar com a interação do usuário com o componente, tendo efeito na renderização do mesmo, o state pode ser passado como props!

Props: Valores para a configuração de um componente, essas props são passadas pelo elemento acima (que utiliza o componente que irá receber) e são imutáveis, utilizado para a comunicação de componentes.
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas:[]
    };
  }
  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    //unindo o array vazio, com o novo array
    const novoArrayDeNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayDeNotas
    }
    this.setState(novoEstado);
  }
  render() {
    return (
      <div className="d-flex p-4">
        <div className="flex-fill me-5">
          <FormDeNotas criarNota={this.criarNota.bind(this)}/>
          </div>
        <div className="flex-fill ms-2">
          <ListaDeNotas notas={this.state.notas}/>
          </div>
      </div>
    );
  }
}

export default App;
