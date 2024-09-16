import React from "react";
import Cliente from "../_core/Cliente";
import { PenBoxIcon, Trash } from "lucide-react";

interface TableProps {
  clientes: Cliente[];
  clienteSelecionado?: (client: Cliente) => void;
  clienteExcluido?: (client: Cliente) => void;
}

export const Table = ({
  clientes,
  clienteExcluido,
  clienteSelecionado,
}: TableProps) => {
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`bg-gradient-to-r from-purple-500 to-purple-800 text-neutral-100`}
      >
        <tr>
          <th className="text-left p-4">Código</th>
          <th className="text-left p-4">Nome</th>
          <th className="text-left p-4">Idade</th>
          <th className="text-center p-4">Ações</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((v) => (
          <tr key={v.id} className="even:bg-violet-300 odd:bg-violet-400">
            <td className="text-left p-4">{v.id}</td>
            <td className="text-left p-4">{v.nome}</td>
            <td className="text-left p-4">{v.idade}</td>
            <td className="text-center p-4 space-x-4">
              <button
                className="rounded-full transition-all hover:bg-purple-950 p-2 text-red-500"
                onClick={() => clienteSelecionado?.(v)}
              >
                <Trash />
              </button>
              <button
                className="rounded-full transition-all hover:bg-purple-950 p-2 text-yellow-400"
                onClick={() => clienteExcluido?.(v)}
              >
                <PenBoxIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
