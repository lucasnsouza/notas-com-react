import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";

function App() {
  return (
    <div className="container d-flex flex-row">
    <div className="container mb-3">
      <form>
        <div className="mb-3">
          <label className="form-label" for="inputTitulo">Título da Nota</label>
          <input className="form-control" type="text" id="inputTitulo"></input>
        </div>
        <div className="mb-3">
          <label className="form-label" for="textoNota">Texto da Nota</label>
          <textarea className="form-control" id="textoNota" placeholder="Escreva sua nota..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>
    </div>
    <ListaDeNotas/>
    </div>
  );
}

export default App;
