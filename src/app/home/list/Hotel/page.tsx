"use client"
import { useState, useEffect } from "react";
import HotelView from "@/views/Hotel/Hotel";
import React from "react";
import Loading from "@/components/loading/Loading";

interface Hotel {
  _id: string;
  image: string;
  name: string;
  rating: number;
  count: string;
  distance: string;
  price: number;
}

interface Region {
  id: string;
  thumbnail: string;
  title: string;
}

const getRandomHotels = (hotelList: Hotel[]): Hotel[] => {
  const shuffled = hotelList.sort(() => Math.random() - 0.5); 
  return shuffled.slice(0, 4);
};

const HotelPage = () => {
  const titleData = "호텔";

  const [data, setData] = useState<Region[]>([]);
  const [popData, setPopData] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const hotelResponse = await fetch(
          "http://localhost:4000/api/lodges/?categoryId=673b1682a13a15500742e04d"
        );
        if (!hotelResponse.ok) {
          throw new Error(
            `호텔 데이터 요청 실패: ${hotelResponse.status} ${hotelResponse.statusText}`
          );
        }
        const hotelData: Hotel[] = await hotelResponse.json();
        const modifiedHotelData = hotelData.map((item) => ({
          ...item,
          id: item._id, 
        }));
        const randomHotels = getRandomHotels(modifiedHotelData);
        console.log("randomHotels", randomHotels);
        setPopData(randomHotels);

        const regionResponse = await fetch("http://localhost:4000/api/category?level=1&parent=673b1682a13a15500742e04d");
        console.log('Region response:', regionResponse); 

        if (!regionResponse.ok) {
          throw new Error(
            `지역 데이터 요청 실패: ${regionResponse.status} ${regionResponse.statusText}`
          );
        }
        const data = await regionResponse.json();
        console.log('Region data:', data);
        const regionData: Region[] = data.results;
        setData(regionData);

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
    return <div><Loading/></div>;
  }

  if (error) {
    return <div>에러: {error}</div>;
  }

  return <HotelView titleData={titleData} data={data} popData={popData} />;
};

export default HotelPage;