import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component
{
    render() {
        return (
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <CardNota/>
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <CardNota/>
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <CardNota/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ListaDeNotas;
