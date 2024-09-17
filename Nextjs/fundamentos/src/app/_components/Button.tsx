import clsx from "clsx";

interface ButtonProps {
  label: string;
  variant?: "green" | "blue" | "neutral";
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = "neutral",
  className,
  onClick,
}: ButtonProps) => {
  const variantColors = {
    green: "from-green-400 to-green-700 text-neutral-950",
    blue: "from-blue-400 to-blue-700 text-neutral-50",
    neutral: "from-gray-400 to-gray-700 text-neutral-50",
  };

  return (
    <button
      className={clsx(
        "bg-gradient-to-r px-4 py-2 rounded-md",
        variantColors[variant],
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
