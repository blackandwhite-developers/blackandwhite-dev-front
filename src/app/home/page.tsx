import React from "react";

import Homeview from "@/views/Home/Home.view";
const HomePage = () => {
  const category = [
    {
      id: "motel",
      name: "모텔",
      image: "Motel",
    },
    {
      id: "hotel",
      name: "호텔",
      image: "Hotel",
    },
    {
      id: "pool",
      name: "팬션/풀빌라",
      image: "Pool",
    },
    {
      id: "camping",
      name: "캠핑",
      image: "Camping",
    },
    {
      id: "guesthouse",
      name: "게스트하우스",
      image: "Guesthouse",
    },
    {
      id: "leisure",
      name: "레저/티켓",
      image: "Leisure",
    },
    {
      id: "othercountry",
      name: "해외숙소",
      image: "Othercountry",
    },
    {
      id: "airport",
      name: "항공",
      image: "Airport",
    },
  ];

  const currentDate = [
    {
      id: "코코시하우스",
      thumbnail: "/home/hotel/hotel_01.svg",
      title: "코코시하우스",
      price: 45000,
    },
    {
      id: "알라베티호텔",
      thumbnail: "/home/hotel/hotel_02.svg",
      title: "알라베티호텔",
      price: 253000,
    },
    {
      id: "루첼라 루 호텔",
      thumbnail: "/home/hotel/hotel_03.svg",
      title: "루첼라 루 호텔",
      price: 85000,
    },
  ];

  return <Homeview category={category} currentDate={currentDate} />;
};

export default HomePage;
