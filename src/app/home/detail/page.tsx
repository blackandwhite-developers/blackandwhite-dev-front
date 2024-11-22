"use client"
import ProductDetailView from "@/views/ProductDetail/ProductDetail.view";
import React, { useState, useEffect } from "react";

interface ProductDetailProps {
  category: { id: string; title: string; thumbnail: string };
  name: string;
  rating: number;
  count: number;
  distance: string;
}

interface ProductDetailCardProps {
  image: string;
  event: string;
  name: string;
  capacity: { standard: number; maximum: number };
  time: { checkIn: string; checkOut: string, };
  price: { shortStayPrice: string };
  stock: number;
}

export default function ProductDetailPage() {
  const [data, setData] = useState<ProductDetailProps | null>(null);
  const [productDetailsArray, setProductDetailsArray] = useState<ProductDetailCardProps[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const roomResponse = await fetch('http://localhost:4000/api/lodges/673edf1c2b13f5f8e78a5579');
        const roomData = await roomResponse.json();
        console.log("roomData: ", roomData);

        if (roomData.category) {
          console.log("categoryTitle:", roomData.category.title);

          setData(roomData);
        } else {
          console.error("lodge 데이터 요청 실패:", roomData);
          setData(null);
        }


        const productResponse = await fetch('http://localhost:4000/api/rooms');
        const productData = await productResponse.json();
        console.log("productData: ", productData);
        setProductDetailsArray(productData);

        // total review data
        // const reviewResponse = await fetch('/api/totalReview');
        // const reviewData = await reviewResponse.json();
        // setTotalReviewData(reviewData);

        // review
        //     const reviewsResponse = await fetch('/api/reviews'); 
        //     const reviewsData = await reviewsResponse.json();
        //     setReviews(reviewsData);
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
      <ProductDetailView data={data} productDetailsArray={productDetailsArray} />
    ) : (
      <div>데이터를 불러올 수 없습니다.</div>
    )}
  </>;
}
