import { useSortable } from "@dnd-kit/sortable";
import type { INavElement } from "../types";
import { CSS } from "@dnd-kit/utilities";

type NavElementProps = {
  navElement: INavElement;
  onClick: (navElement: INavElement) => void;
};

export default function NavElement({ navElement, onClick }: NavElementProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: navElement.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`transition-all duration-300 ease-out  ${
        navElement.isActive
          ? "bg-white/80 text-gray-800 shadow-lg animate-glow"
          : "bg-white/60 text-gray-700 hover:bg-white/70"
      } ${isDragging ? "dragging" : ""}`}
    >
      <button
        className="flex flex-row gap-2 px-4 py-2 rounded-lg cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onClick(navElement);
        }}
      >
        <span className="relative z-10">{navElement.title}</span>
        <span className="relative z-10">{navElement.position}</span>
      </button>

      {isDragging && (
        <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse" />
      )}
    </div>
  );
}
