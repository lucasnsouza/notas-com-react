import React, { Component } from "react";

class FormDeNotas extends Component
{
    render() {
        return (
            <div className="container mb-3">
                <form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="inputTitulo">Título da Nota</label>
                        <input className="form-control" type="text" id="inputTitulo"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="textoNota">Texto da Nota</label>
                        <textarea className="form-control" id="textoNota" placeholder="Escreva sua nota..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
    }
}

export default FormDeNotas;
