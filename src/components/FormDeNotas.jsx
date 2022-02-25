import React, { Component } from "react";

class FormDeNotas extends Component
{
    constructor(props) {
        //usamos o super porque estamos extendendo da classe Component
        super(props);
        this.titulo = "";
        this.textoDaNota = "";
    }
    //vamos ter um método que vai gerenciar a mudança de título
    _handleMudancaDeTitulo(evento) {
        //quando disparamos um evento ele segue uma "trilha"
        //do elemento root do html até o target do click
        //o método abaixo garante que o evento só ocorra no target
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }
    //o mesmo para o texto da nota
    _handleMudancaDeTexto(evento) {
        evento.stopPropagation();
        this.textoDaNota = evento.target.value;
    }
    _criarNovaNota(evento) {
        //por padrão o submit recarrega a página
        //não preciamos disso com react
        evento.preventDefault();
        evento.stopPropagation();
        //props permite que acessemos uma propriedade da classe pai App
        //aqui conseguimos acessar o método criarNota()
        this.props.criarNota(this.titulo, this.textoDaNota);
    }
    render() {
        return (
            <form
            onSubmit={this._criarNovaNota.bind(this)}>
                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor="inputTitulo">
                        Título da Nota
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="inputTitulo"
                        onChange={this._handleMudancaDeTitulo.bind(this)}>
                    </input>
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor="textoNota">
                        Texto da Nota
                    </label>
                    <textarea
                        rows={10}
                        className="form-control"
                        id="textoNota"
                        placeholder="Escreva sua nota..."
                        onChange={this._handleMudancaDeTexto.bind(this)}>
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        );
    }
}

export default FormDeNotas;
