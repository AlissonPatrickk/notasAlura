import React from "react";
import { Component } from "react";
import "./Formulario.css"

class Formulario extends Component {
    render() {
        return (
          <form className="form-cadastro ">
            <input
              type="text"
              placeholder="Título"
              className="form-cadastro_input"
            />
            <textarea
              rows={15}
              placeholder="Escreva sua nota..."
              className="form-cadastro_input"
            />
            <button className="form-cadastro_input form-cadastro_submit">
              Criar Nota
            </button>
          </form>
        );
      }
}

export default Formulario;
