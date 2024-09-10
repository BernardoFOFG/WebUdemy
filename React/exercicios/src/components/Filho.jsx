import React from "react";

export const Filho = ({ nome, sobrenome, sobrenomePai }) => {
  return (
    <li>
      {nome} {sobrenomePai ? `${sobrenomePai}` : sobrenome}
    </li>
  );
};
