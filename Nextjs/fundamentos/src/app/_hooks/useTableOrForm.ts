import { useState } from "react";

export default function useTableOrForm() {
  const [show, setShow] = useState<"table" | "form">("table");

  const showTable = () => {
    return setShow("table");
  };
  const showForm = () => {
    return setShow("form");
  };

  console.log(show)

  return {
    formShow: show === "form",
    tableShow: show === "table",
    showTable,
    showForm,
  };
}
