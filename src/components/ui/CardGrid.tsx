import React from "react";

interface CardGridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  columns?: "2" | "3" | "4";
}

export default function CardGrid<T>({ items, renderItem, columns = "3" }: CardGridProps<T>) {
  const gridClasses = {
    "2": "grid md:grid-cols-2 gap-8",
    "3": "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    "4": "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",
  };

  return (
    <div className={gridClasses[columns]}>
      {items.map(renderItem)}
    </div>
  );
}
