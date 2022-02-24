import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component
{
    render() {
        return (
            <div className="container">
                <ul className="list-group">
                {Array.of("Trabalho", "Estudos", "Geral").map((categoria) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <CardNota />
                            </div>
                            <span class="badge bg-primary rounded-pill">{categoria}</span>
                        </li>
                    );
                })}
                </ul>
            </div>
        );
    }
}

export default ListaDeNotas;
