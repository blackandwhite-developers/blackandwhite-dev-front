"use client"
import Loading from "@/components/loading/Loading";
import ProductSelectView from "@/views/ProductSelect/ProductSelect.view";
import React, { useState, useEffect } from "react";

interface ProductSelectProps {
  id: string; 
  category: { id: string; title: string; thumbnail: string };
  name: string;
  rating: number;
  count: number;
  distance: string;
}

interface productSelectDataProps {
  image: string;
  event: string;
  name: string;
  capacity: { standard: number; maximum: number };
  time: { checkIn: string; checkOut: string };
  price: { price: number };
  stock: number;
}

export default function ProductSelectPage() {
  const [data, setData] = useState<ProductSelectProps | null>(null);
  const [productSelectData, setProductSelectData] = useState<productSelectDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const roomResponse = await fetch(`http://localhost:4000/api/lodges/673edf1c2b13f5f8e78a5579`);
        const roomData = await roomResponse.json();
        console.log("roomData:", roomData);

        if (roomData) {
          const lodgeId = roomData.id;
          const categoryId = roomData.category.id;  
          console.log("lodgeId:", lodgeId);
          console.log("categoryId:", categoryId);

          setData({
            id: lodgeId, 
            category: roomData.category,
            name: roomData.name,
            rating: roomData.rating,
            count: roomData.count,
            distance: roomData.distance,
          });

          const productResponse = await fetch(`http://localhost:4000/api/rooms/?lodgeId=${lodgeId}`);
          const productData = await productResponse.json();
          console.log("productData:", productData);

          const productDataWithLodgeId = productData.map((item: any) => ({
            ...item,
            lodgeId: lodgeId, 
          }));

          setProductSelectData(productDataWithLodgeId);
        } else {
          console.error("lodge 데이터 요청 실패:", roomData);
          setData(null);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  if (loading) {
    return <div><Loading /></div>;
  }

  if (error) {
    return <div>에러: {error}</div>;
  }

  return (
    <>
      {data ? (
        <ProductSelectView data={data} productSelectData={productSelectData} />
      ) : (
        <div>데이터를 불러올 수 없습니다.</div>
      )}
    </>
  );
}
