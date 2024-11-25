import HotelView from "@/views/Hotel/Hotel";
import React from "react";
import Loading from "@/components/loading/Loading";
import { categoryService } from "@/api/services";

const fetchCategoryData = async (categoryId: string) => {
  const res = await categoryService.getCategory({ path: { cid: categoryId } });

  return res;
};

interface Hotel {
  _id: string;
  image: string;
  name: string;
  rating: number;
  count: string;
  distance: string;
  price: number;
}

type CategoryPageProps = {
  params: Promise<{ categoryId: string }>;
};

interface Region {
  id: string;
  thumbnail: string;
  title: string;
}

const getRandomHotels = (hotelList: Hotel[]): Hotel[] => {
  const shuffled = hotelList.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
};

// 호텔 페이지에서 카테고리 페이지로 수정 필요함
const HotelPage = async (props: CategoryPageProps) => {
  const { categoryId } = await props.params;
  console.log(categoryId);
  const categoryData = await fetchCategoryData(categoryId);
  console.log(categoryData);
  const titleData = categoryData.category.title;

  return <HotelView titleData={titleData} />;
};

export default HotelPage;
