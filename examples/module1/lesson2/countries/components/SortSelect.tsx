import React from 'react';
interface SortSelectProps {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}
export const SortSelect = ({ sortOption, setSortOption }: SortSelectProps) => {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="">Initial</option>
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
    </label>
  );
};
