"use client";

import { useEffect, useState } from "react";
import ClienteRepository from "../_core/ClienteRepository";
import CollectionCliente from "../_database/CollectionCliente";
import Cliente from "../_core/Cliente";
import useTableOrForm from "./useTableOrForm";

export default function useClientes() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const repo: ClienteRepository = new CollectionCliente();
  const { showForm, showTable, tableShow } = useTableOrForm();

  useEffect(() => {
    clienteGetAll();
  }, []);

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    showForm();
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.delete(cliente);
    clienteGetAll();
  }

  async function clienteSalvo(cliente: Cliente) {
    await repo.save(cliente);
    clienteGetAll();
  }

  async function clienteGetAll() {
    await repo.getAll().then((clientes) => {
      setClientes(clientes);
      showTable();
    });
  }

  function clienteNovo() {
    setCliente(Cliente.vazio());
    showForm();
  }

  return {
    cliente,
    clientes,
    clienteNovo,
    clienteSalvo,
    clienteExcluido,
    clienteSelecionado,
    clienteGetAll,
    tableShow,
    showTable,
  };
}
