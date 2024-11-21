"use client"
import { useState, useEffect } from "react";
import HotelView from "@/views/Hotel/Hotel";
import React from "react";

interface Hotel {
  id: string;
  image: string;
  name: string;
  rate: string;
  count: string;
  distance: string;
  price: number;
}

const getRandomHotels = (hotelList: Hotel[]): Hotel[] => {
  const shuffled = hotelList.sort(() => Math.random() - 0.5); 
  return shuffled.slice(0, 4);
};

const HotelPage = () => {
  const titleData = "호텔";

  const [data, setData] = useState([]);
  const [popData, setPopData] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('fetch 시작');

        const hotelResponse = await fetch("http://localhost:4000/admin-api/lodges/?categoryId=673b1682a13a15500742e04d");

        console.log('fetch 완료:', hotelResponse);

        const hotelData: Hotel[] = await hotelResponse.json(); 
        
        console.log("hotelData", hotelData);

        const randomHotels = getRandomHotels(hotelData);
        setPopData(randomHotels); 

        setLoading(false);
      } catch (error: unknown) { 
        if (error instanceof Error) { 
          setError(error.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러: {error}</div>;
  }


  return <HotelView titleData={titleData} data={data} popData={popData} />;
};

export default HotelPage;
