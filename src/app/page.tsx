import React from "react";
import "./page.scss";
import axios from "axios";
import MainCategory from "./components/category/main/MainCategory";

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
        return <MainCategory key={item.categoryName} categoryName={item.categoryName} categoryIcon={item.categoryIcon.path} categoryKoreanName={item.categoryKoreanName} />;
      })}
    </React.Fragment>
  );
}
