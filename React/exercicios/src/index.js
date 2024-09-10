import React from "react";
import ReactDOM from "react-dom";
import { Pai } from "./components/Pai";
import { Filho } from "./components/Filho";

ReactDOM.render(
  <>
    <Pai nome="Olá" sobrenome="Rafael">
      <Filho nome="Filho 1" />
      <Filho nome="Filho 2" />
      <Filho nome="Filho 3" />
    </Pai>
  </>,
  document.getElementById("root")
);
