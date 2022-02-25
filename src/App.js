import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormDeNotas from "./components/FormDeNotas";

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
