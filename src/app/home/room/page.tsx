"use client";
import Loading from "@/components/loading/Loading";
import ProductRoomDetailView from "@/views/ProductRoomDetail/ProductRoomDetail.view";
import React, { useState, useEffect } from "react";

type BookingData = {
  lodgeData: {
    name: string;
  };
  roomData: {
    _id: string;
    event: string;
    time: {
      checkIn: string;
      checkOut: string;
    };
    price: { 
      price: number;
    };
    stock: number;
    capacity: { standard: number; maximum: number };
    startDate: string;
    endDate: string;
  };
};

export default function ProductRoomDetailPage() {
  const [data, setData] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const roomResponse = await fetch(
          "http://localhost:4000/api/rooms/673fffa35ba58908dfcc0df3"
        );
        const roomData = await roomResponse.json();

        const lodgeResponse = await fetch(
          `http://localhost:4000/api/lodges/${roomData.lodgeId}`
        );
        const lodgeData = await lodgeResponse.json();

        if (roomData && lodgeData) {
          console.log("roomData:", roomData);
          const combinedData: BookingData = {
            lodgeData: {
              name: lodgeData.name || "",
            },
            roomData: {
              _id: roomData._id || "",
              event: roomData.event || "",
              time: {
                checkIn: roomData.checkInTime || "",
                checkOut: roomData.checkOutTime || "",
              },
              price: { 
                price: roomData.price?.price || 0,
              },
              stock: roomData.stock || 0,
              capacity: {
                standard: roomData.capacity?.standard || 0,
                maximum: roomData.capacity?.maximum || 0,
              },
              startDate: roomData.startDate || "",
              endDate: roomData.endDate || "",
            },
          };
          setData(combinedData);
          console.log("combinedData:", combinedData);
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
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>에러: {error}</div>;
  }

  console.log("data passed to ProductRoomDetailView:", data);
  return (
    <>
      {data ? (
        <ProductRoomDetailView data={data} />
      ) : (
        <div>데이터를 불러올 수 없습니다.</div>
      )}
    </>
  );
}
