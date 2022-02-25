import React, { Component } from 'react';

class CardNota extends Component {
    render() {
        return (
            <div className="card" style={{ width: "12rem" }}>
                <div className="card-body">
                    <h6 className="card-title">{this.props.titulo}</h6>
                    <p className="card-text">{this.props.texto}</p>
                </div>
            </div>
        );
    }
}
  
export default CardNota;
