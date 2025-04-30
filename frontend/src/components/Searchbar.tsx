"use client";

import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

const SearchBar = ({ value, onChange, onClear }: Props) => {
  return (
    <div className="mb-6 max-w-md mx-auto flex items-center space-x-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, unit number, or project..."
        className="flex-1 border px-4 py-2 rounded"
      />
      {value && (
        <button
          onClick={onClear}
          className="text-sm px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
