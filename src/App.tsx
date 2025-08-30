import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import type { INavElement } from "./types";
import { DEFAULT_NAV_TABS } from "./constants/defualtNavElements";
import SortableNavElement from "./components/NavElement";
import Button from "./components/button";
import { Plus } from "lucide-react";

// Sortable Nav Element Component

function App() {
  const [navElements, setNavElements] =
    useState<INavElement[]>(DEFAULT_NAV_TABS);
  const [activeNavElement, setActiveNavElement] = useState<INavElement>(
    DEFAULT_NAV_TABS[3]
  );

  useEffect(() => {
    const activeElement = navElements.find((element) => element.isActive);
    if (activeElement) {
      setActiveNavElement(activeElement);
    }
  }, [navElements]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 6,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const parentStyles = {
    backgroundColor: activeNavElement.color,
  };

  function handleNavElementClick(navElement: INavElement) {
    console.log(navElement);
    setNavElements(
      navElements.map((element) => ({
        ...element,
        isActive: element.id === navElement.id,
      }))
    );
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setNavElements((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        const newItems = arrayMove(items, oldIndex, newIndex);

        // Update positions
        return newItems.map((element, index) => ({
          ...element,
          position: index + 1,
        }));
      });
    }
  }

  function handleAddPage() {
    setNavElements((prev) => [
      ...prev,
      {
        id: "new",
        title: "New page",
        Icon: Plus,
        color: "#000000",
        position: navElements.length + 1,
        isActive: false,
      },
    ]);
  }

  function handleMouseEnter(navElement: INavElement) {}

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <article
        className="h-screen transition-colors duration-300 p-20 flex flex-col gap-4"
        style={parentStyles}
      >
        <h1 className="text-2xl font-bold mb-8">Fillout</h1>
        <SortableContext
          items={navElements.map((item) => item.id)}
          strategy={horizontalListSortingStrategy}
        >
          <div className="flex flex-row gap-5 rounded-xl w-fit max-w-full overflow-x-auto transition-all duration-500 ease-out items-center relative">
            {navElements.map((navElement) => (
              <SortableNavElement
                key={navElement.id}
                navElement={navElement}
                onClick={handleNavElementClick}
              />
            ))}
            <Button text="Add page" onClick={handleAddPage} Icon={Plus} />
            <div className="absolute right-0 top-1/2 w-full border border-primary-200 border-dashed z-0" />
          </div>
        </SortableContext>
      </article>
    </DndContext>
  );
}

export default App;
