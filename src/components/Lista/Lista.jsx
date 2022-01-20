import React from "react";
import { Component } from "react";
import CardNota from "../CardNota/CardNota"
import "./Lista.css"


class Lista extends Component {
    render() {
        return (
          <ul className="lista-notas">
            {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
              return (
                <li className="lista-notas_item" key={index}>
                  <CardNota />
                </li>
              );
            })}
          </ul>
        );
      }
}



export default Lista;