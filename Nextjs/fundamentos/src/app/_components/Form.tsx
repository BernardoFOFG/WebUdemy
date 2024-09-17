"use client"

import { useState } from "react";
import Cliente from "../_core/Cliente";
import { Input } from "./Input";
import { Button } from "./Button";

interface FormProps {
  cliente: Cliente;
  clienteChange?: (cliente: Cliente) => void;
  canceled?: () => void;
}

export const Form = ({ cliente, canceled, clienteChange }: FormProps) => {
  const id = cliente?.id;
  const [nome, setNome] = useState(cliente?.nome ?? "");
  const [idade, setIdade] = useState(cliente?.idade ?? undefined);

  return (
    <div>
      <div className="space-y-2">
        {id && <Input label="Código" value={id} />}

        <Input label="Nome" value={nome} valueChanged={setNome} />
        <Input
          label="Idade"
          value={idade}
          type="number"
          valueChanged={setIdade}
        />
      </div>

      <div className="flex justify-end mt-3 space-x-2">
        <Button
          variant={id ? "blue" : "green"}
          label={id ? "Alterar" : "Salvar"}
          onClick={() => clienteChange?.(new Cliente(nome, idade, id))}
        />
        <Button label="Cancelar" onClick={canceled} />
      </div>
    </div>
  );
};
