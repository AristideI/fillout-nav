import { useSortable } from "@dnd-kit/sortable";
import type { INavElement } from "../types";
import { CSS } from "@dnd-kit/utilities";

type NavElementProps = {
  navElement: INavElement;
  onClick: (navElement: INavElement) => void;
};

export default function NavElement({ navElement, onClick }: NavElementProps) {
  const { id, title, Icon, isActive } = navElement;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const activeStyles =
    "bg-white text-black border border-primary-100 shadow-lg";
  const inactiveStyles =
    "bg-primary-600 hover:bg-primary-700 text-primary-400";

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`transition-all duration-300 ease-out rounded-lg z-10 ${
        isDragging ? "dragging" : ""
      } ${isActive ? activeStyles : inactiveStyles}`}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick(navElement);
        }}
        className="flex flex-row gap-1.5 px-2.5 py-2 cursor-pointer text-sm font-medium z-10"
      >
        {
          <Icon
            height={20}
            width={20}
            color={isActive ? "#F59D0E" : "#8c93a1"}
          />
        }
        {title}
      </button>

      {isDragging && (
        <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse" />
      )}
    </div>
  );
}
