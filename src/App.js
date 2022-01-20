import React from "react";
import Lista from "./components/Lista/Lista";
import Formulario from "./components/Formulario/Formulario";
import { Component } from "react";
import "./assets/App.css"
import "./assets/Index.css"

class App extends Component {
  render () {
    return (
      <section className="conteudo">
        <Formulario />
        <Lista />
      </section>
    );
  }
}

export default App;
