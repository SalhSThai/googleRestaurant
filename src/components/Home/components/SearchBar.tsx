import SearchIcon from '@/asset/SearchIcon';
import React, { Dispatch, SetStateAction } from 'react';

interface props {
  inputValue: string;
  onChange: Dispatch<SetStateAction<string>>;
}
export default function SearchBar(props: props) {
  const { onChange, inputValue } = props;
  return (
    <div className="mt-1 flex rounded-md shadow-sm">
      <span className="inline-flex items-center rounded-l-md border-2 border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 text-[100px]">
        <SearchIcon />
      </span>
      <input
        value={inputValue}
        type="text"
        name="searchBar"
        id="searchBar"
        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Enter place"
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="inline-flex items-center rounded-l-md border-2 border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 text-[10px]">
        <button>SEARCH</button>
      </span>
    </div>
  );
}
