import SearchIcon from '@/asset/SearchIcon';
import { apiGoogleGetRestaurant } from 'api/googleApi';
import axios from 'axios';
import axiosInstance from 'config/axios';
import React, { useEffect, useState } from 'react';
import RestaurantCard from './components/RestaurantCard';
import SearchBar from './components/SearchBar';

export default function HomePage() {
  const [results, setResults] = useState([]);
  const [inputText, setInputText] = useState('Bang sue');

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/api/googlefetch', { search: inputText });
    setResults(res.data.results);
  };
  return (
    <div className="w-full  h-screen flex justify-center items-start ">
      <form className="h-fit min-h-[500px] w-full max-w-[768px] shadow-2xl p-4" onSubmit={submitHandler}>
        <SearchBar inputValue={inputText} onChange={setInputText} />
        {results.map((i, d) => (
          <RestaurantCard key={d} info={i} />
        ))}
      </form>
    </div>
  );
}
