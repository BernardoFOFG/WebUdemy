"use client";

import { Button } from "./_components/Button";
import { Form } from "./_components/Form";
import { Table } from "./_components/Table";
import { Title } from "./_components/Title";
import useClientes from "./_hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    clienteNovo,
    clienteExcluido,
    clienteSalvo,
    clienteSelecionado,
    showTable,
    tableShow
  } = useClientes();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Title title="Cadastro Simples" />
      <div className="px-2 py-3 bg-neutral-100 text-neutral-950 w-full">
        {tableShow ? (
          <>
            <div className="flex justify-end mb-4">
              <Button
                onClick={clienteNovo}
                label="Novo Cliente"
                variant="green"
              />
            </div>
            <Table
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Form
            cliente={cliente}
            canceled={showTable}
            clienteChange={clienteSalvo}
          />
        )}
      </div>
    </div>
  );
}
