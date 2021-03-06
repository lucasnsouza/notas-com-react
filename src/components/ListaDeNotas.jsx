import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component
{
    //o nosso construtor só vai receber as propriedades do pai
    //por isso não pecisamos declarar um construtor, o JS já faz isso debaixo dos panos
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
                <ul className="list-group list-group-horizontal">
                {/*
                 usando um array map do js para criar um loop de li's. 
                 o atributo 'key' na tag 'li' permite ao react identificar cada item renderizado,
                 por isso deve ser único. para garantir isso, fiz uma concatenação para atribuir um
                 nome individual para cada 'key' 
                */}
                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index} className="list-group-item align-items-start">
                            <div className="ms-2">
                                <CardNota titulo={nota.titulo} texto={nota.texto}/>
                            </div>
                        </li>
                    );
                })}
                </ul>
        );
    }
}

export default ListaDeNotas;
