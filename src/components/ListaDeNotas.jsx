import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component
{
    render() {
        return (
            <div className="container">
                <ul className="list-group">
                {/*
                 usando um array map do js para criar um loop de li's. 
                 o atributo 'key' na tag 'li' permite ao react identificar cada item renderizado,
                 por isso deve ser único. para garantir isso, fiz uma concatenação para atribuir um
                 nome individual para cada 'key' 
                */}
                {Array.of("Trabalho", "Estudos", "Geral").map((categoria) => {
                    return (
                        <li key={"id" + categoria} className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <CardNota />
                            </div>
                            <span className="badge bg-primary rounded-pill">{categoria}</span>
                        </li>
                    );
                })}
                </ul>
            </div>
        );
    }
}

export default ListaDeNotas;
