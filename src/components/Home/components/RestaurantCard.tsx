import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function RestaurantCard(props) {
  const { info } = props;
  const [results, setResults] = useState([]);
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photo_reference=${info?.photos?.[0]?.photo_reference}&key=${process.env.API_KEY}`;

  return (
    <div className="w-full h-[120px] flex justify-evenly my-2 bg-white rounded-xl shadow-xl p-2">
      <div className="h-full aspect-square shadow-md overflow-hidden">
        <div className="w-[100px] aspect-square bg-no-repeat bg-cover" style={{ backgroundImage: `url("${url}")` }} />
      </div>
      <div className="h-full grow flex flex-col items-stretch text-[12px] font-light text-slate-500 justify-center px-2">
        <div className="text-[16px] font-medium text-black">{info.name}</div>
        <div>{info?.types?.[0]}</div>
        <div>{info?.opening_hours?.open_now ? <div className="text-green-300">open</div> : <div className="text-red-300">cloesd</div>}</div>
        <div>dine-in</div>
      </div>
    </div>
  );
}
