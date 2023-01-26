import axios from 'axios';
import React, { useEffect, useState } from 'react';
interface props {
  info: info;
}
interface info {
  business_status: string;
  formatted_address: string;
  geometry: {
    location: { lat: number; lng: number };
    viewport: { northeast: { lat: number; lng: number }; southwest: { lat: number; lng: number } };
  };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: { open_now: boolean };
  photos: {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
  }[];
  place_id: string;
  plus_code: { compound_code: string; global_code: string };
  rating: number;
  reference: string;
  types: string[];
  user_ratings_total: number;
}
export default function RestaurantCard(props: props) {
  const { info } = props;
  const [results, setResults] = useState([]);
  console.log(JSON.stringify(info));
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
