import React from "react";
// import ProductCard from "../components/ProductCard/ProductCard";
import ProductDetailCard from "@/components/ProductDetailCard/ProductDetailCard";

export default function Home() {
  return (
    <>
      <ProductDetailCard
        imageUrl={"https://dummyimage.com/300"}
        label={"호텔"}
        title={"김포 마리나베이 호텔"}
        infomation={{
          parlorInfomation: "기준 2인 (최대 3인)",
          checkInInfomation: "16:00",
          checkOutInfomatio: "22:00",
          lodgePrice: 75000,
          roomCount: 1,
        }}
      />
    </>
  );
}
