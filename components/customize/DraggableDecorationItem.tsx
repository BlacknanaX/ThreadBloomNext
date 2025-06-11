"use client";

import { useDrag } from "react-dnd";

/**
 * DraggableDecorationItem
 * A draggable item for decoration selection in the customize flow.
 */
export function DraggableDecorationItem({ decoration, onDragEnd }: { decoration: { id: number; name: string; price: number }, onDragEnd?: () => void }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "DECORATION",
    item: { ...decoration },
    end: onDragEnd,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [decoration, onDragEnd]);

  return (
    <div
      ref={drag}
      className={`p-2 border rounded-md cursor-move bg-white shadow-sm ${isDragging ? "opacity-50" : ""}`}
      style={{ marginBottom: 8 }}
    >
      <span className="font-content">{decoration.name}</span>
      <span className="ml-2 text-gray-500 text-sm">+£{decoration.price}</span>
    </div>
  );
}
