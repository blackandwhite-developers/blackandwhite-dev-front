import HotelView from "@/views/Hotel/Hotel";
import React from "react";
import { categoryService, lodgeService } from "@/api/services";
import ProductCard from "@/components/ProductCard/ProductCard";

const fetchCategoryData = async (categoryId: string) => {
  const res = await categoryService.getCategory({ path: { cid: categoryId } });

  return res;
};

const fetchHotelData = async (categoryId: string) => {
  const res = await lodgeService.getLodgesByCategories({ params: { categoryId: categoryId } });
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

// interface Region {
//   id: string;
//   thumbnail: string;
//   title: string;
// }

// const getRandomHotels = (hotelList: Hotel[]): Hotel[] => {
//   const shuffled = hotelList.sort(() => Math.random() - 0.5);
//   return shuffled.slice(0, 4);
// };

// 호텔 페이지에서 카테고리 페이지로 수정 필요함
const HotelPage = async (props: CategoryPageProps) => {
  const { categoryId } = await props.params;
  console.log(categoryId);
  const categoryData = await fetchCategoryData(categoryId);
  const hotelData = await fetchHotelData(categoryId);
  console.log(categoryData);
  console.log(hotelData);
  const titleData = categoryData.category.title;

  return (
    <React.Fragment>
      <HotelView titleData={titleData} />
      {hotelData.data.map((hotel) => {
        return <ProductCard key={hotel.id} imageUrl={hotel.image} label={hotel.description} title={hotel.name} address={hotel.address} price={hotel.price} />;
      })}
    </React.Fragment>
  );
};

export default HotelPage;
