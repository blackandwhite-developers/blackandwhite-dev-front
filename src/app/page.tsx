import React from "react";
import "./page.scss";
import axios from "axios";
import Image from "next/image";

// This is an example of mock data fetching.
// mocks/handlers.ts will intercept the request and return the mock data.
const getData = async () => {
  const res = await axios.get("http://localhost:3000/api/home-category");
  return res.data;
};

export default async function Home() {
  const data = await getData();
  return (
    <React.Fragment>
      {data.categories.map((item: { categoryName: string; categoryIcon: { path: string }; categoryKoreanName: string }) => {
        return (
          <React.Fragment key={item.categoryName}>
            <Image src={item.categoryIcon.path} alt={item.categoryKoreanName} width={58} height={58} />
            <p>{item.categoryKoreanName}</p>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
