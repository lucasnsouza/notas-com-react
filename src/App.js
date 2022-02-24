import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormDeNotas from "./components/FormDeNotas";

function App() {
  return (
    <div className="container d-flex flex-row">
    <FormDeNotas/>
    <ListaDeNotas/>
    </div>
  );
}

export default App;
