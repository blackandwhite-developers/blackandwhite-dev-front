"use client"
import ProductRoomDetailView from "@/views/ProductRoomDetail/ProductRoomDetail.view";
import React, { useState, useEffect } from "react";

type ProductRoomDetailCardProps = {
  event?: string;
  title: "대실" | "숙박";
  name: string;
  checkIn?: string | null;
  checkOut?: string | null;
  price: { shortStayPrice: string; overnightPrice: string; };
  stock: number;
  capacity: { standard: number; maximum: number };
};

export default function ProductRoomDetailPage() {
  const [data, setData] = useState<ProductRoomDetailCardProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const roomResponse = await fetch('http://localhost:4000/api/rooms/673fffa35ba58908dfcc0df3');
        const roomData = await roomResponse.json();
        console.log("roomData: ", roomData);

        if (roomData.category) {
          console.log("categoryTitle:", roomData.category.title);

          setData(roomData);
        } else {
          console.error("lodge 데이터 요청 실패:", roomData);
          setData(null);
        }

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

  return <>
    {data ? (
      <ProductRoomDetailView data={data} />
    ) : (
      <div>데이터를 불러올 수 없습니다.</div>
    )}
  </>;
}
