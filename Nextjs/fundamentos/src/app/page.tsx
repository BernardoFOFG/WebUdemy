"use client";

import { Table } from "./_components/Table";
import { Title } from "./_components/Title";
import Cliente from "./_core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 34, "2"),
    new Cliente("Carla", 34, "3"),
    new Cliente("Dario", 34, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {}

  function clienteExcluido(cliente: Cliente) {}
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Title title="Cadastro Simples" />

      <div className="px-2 py-3 bg-neutral-100 text-neutral-950 w-full">
        <Table
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </div>
    </div>
  );
}
