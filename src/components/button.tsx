import type { ComponentType, SVGProps } from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export default function Button({ text, onClick, Icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-row gap-1.5 px-2.5 py-2 rounded-lg cursor-pointer bg-white text-gray-700 hover:bg-white/70 text-sm font-medium z-10"
    >
      {<Icon height={20} width={20} />}
      {text}
    </button>
  );
}
