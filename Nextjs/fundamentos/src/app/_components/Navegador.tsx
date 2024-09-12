import Link from "next/link";
import React from "react";

interface NavegadorProps {
  title: string;
}

export const Navegador = ({ title }: NavegadorProps) => {
  return <Link href="/">{title}</Link>;
};
