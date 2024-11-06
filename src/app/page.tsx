import React from "react";
// import ProductCard from "../components/ProductCard/ProductCard";
import ProductDetailCard from "@/components/ProductDetailCard/ProductDetailCard";
import ProductRoomDetailCard from "../components/ProductRoomDetailCard/ProductRoomDetailCard";

export default function Home() {
  return (
    <>
      <ProductDetailCard
        imageUrl={"https://dummyimage.com/300"}
        label={"할인중"}
        title={"김포 마리나베이 호텔"}
        infomation={{
          parlorInfomation: "기준 2인 (최대 3인)",
          checkInInfomation: "16:00",
          checkOutInfomatio: "22:00",
          lodgePrice: 75000,
          roomCount: 1,
        }}
      />
      <ProductRoomDetailCard
        title={"대실"}
        infomation={{
          operationHoure: "13:00 ~ 21:00",
          useHoure: "4",
          checkInTime: "16:00",
          checkOutTime: "11:00",
          price: 35000,
          roomCount: 1,
        }}
      />
      <ProductRoomDetailCard
        title={"숙박"}
        infomation={{
          checkInTime: "16:00",
          checkOutTime: "11:00",
          price: 75000,
          roomCount: 1,
        }}
      />
    </>
  );
}
