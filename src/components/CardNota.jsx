import React, { Component } from 'react';

class CardNota extends Component {
    render() {
        return (
            <div className="card" style={{ width: "12rem" }}>
                <div className="card-body">
                    <h6 className="card-title">Título da Nota</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        );
    }
}
  
export default CardNota;
