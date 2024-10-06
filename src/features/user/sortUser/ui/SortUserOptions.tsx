import React, { useState } from "react";

type SortOptions = "nameAsc" | "nameDesc";

type SortUserOptionsProps = {
  onSortChange: (option: SortOptions) => void;
};

export const SortUserOptions: React.FC<SortUserOptionsProps> = ({
  onSortChange,
}) => {
  const [sortOption, setSortOption] = useState<SortOptions>("nameAsc");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value as SortOptions;
    setSortOption(selectedOption);
    onSortChange(selectedOption);
  };

  return (
    <form className="max-w-sm ">
      <select
        id="sort"
        value={sortOption}
        onChange={handleSortChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="nameAsc">Name Ascending</option>
        <option value="nameDesc">Name Descending</option>
      </select>
    </form>
  );
};
