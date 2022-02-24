import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component
{
    render() {
        return (
                <ul className="list-group list-group-horizontal">
                {/*
                 usando um array map do js para criar um loop de li's. 
                 o atributo 'key' na tag 'li' permite ao react identificar cada item renderizado,
                 por isso deve ser único. para garantir isso, fiz uma concatenação para atribuir um
                 nome individual para cada 'key' 
                */}
                {Array.of("Trabalho", "Estudos", "Geral").map((categoria, index) => {
                    return (
                        <li key={index} className="list-group-item align-items-start">
                            <div className="ms-2">
                                <CardNota />
                            </div>
                            <span className="badge bg-primary rounded-pill">{categoria}</span>
                        </li>
                    );
                })}
                </ul>
        );
    }
}

export default ListaDeNotas;
