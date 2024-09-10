import { Filho } from "./Filho";

export const Pai = ({ nome, sobrenome }) => {
  return (
    <div>
      <h1>
        {nome} {sobrenome}
      </h1>
      <h2>Filhos</h2>
      <ul>
        <Filho nome="Filho1" sobrenome={sobrenome} />
        <Filho {...Pai} />
      </ul>
    </div>
  );
};
