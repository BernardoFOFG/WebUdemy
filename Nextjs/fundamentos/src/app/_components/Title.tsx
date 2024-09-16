interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl w-full">
      <h1 className="px-5 py-2 text-xl">{title}</h1>
      <hr className="border-2 border-purple-500 w-full" />
    </div>
  );
};
