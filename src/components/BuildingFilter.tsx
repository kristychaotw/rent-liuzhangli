import React from "react";

interface BuildingFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

const BuildingFilter: React.FC<BuildingFilterProps> = ({
  categories,
  activeCategory,
  onSelect,
}) => {
  return (
    <div className="filter-menu">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default BuildingFilter;
