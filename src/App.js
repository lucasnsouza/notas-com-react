import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormDeNotas from "./components/FormDeNotas";

function App() {
  return (
    <div className="d-flex p-4">
    <div className="flex-fill me-5"><FormDeNotas/></div>
    <div className="flex-fill ms-2"><ListaDeNotas/></div>
    </div>
  );
}

export default App;
