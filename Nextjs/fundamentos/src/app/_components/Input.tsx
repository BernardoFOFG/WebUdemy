interface InputProps {
  label: string;
  type?: "text" | "number";
  value: any;
  readonly?: boolean;
  valueChanged?: (valor: any) => void;
}

export const Input = ({
  label,
  type = "text",
  value,
  readonly,
  valueChanged,
}: InputProps) => {
  return (
    <div className="flex flex-col ">
      <label className="mb-4">{label}</label>

      <input
        type={type}
        value={value}
        onChange={(e) => valueChanged?.(e.target.value)}
        readOnly={readonly}
        className={`border border-purple-500 rounded-lg focus:outline-none bg-neutral-100 px-4 py-2  ${
          readonly ? "" : "focus:bg-white"
        }`}
      />
    </div>
  );
};
