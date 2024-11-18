import HotelView from "@/views/Hotel/Hotel";
import React from "react";

const HotelPage = () => {
  const titleData = "호텔";

  const data = [
    {
      id: "1번글",
      image: "/categoryImage/img_hotel_seoul.svg",
      title: "서울/경기",
    },
    {
      id: "2번글",
      image: "/categoryImage/img_hotel_chungcheong.svg",
      title: "충청",
    },
    {
      id: "3번글",
      image: "/categoryImage/img_hotel_gyengsang.svg",
      title: "경상",
    },
    {
      id: "4번글",
      image: "/categoryImage/img_hotel_jeonla.svg",
      title: "전라",
    },
    {
      id: "5번글",
      image: "/categoryImage/img_hotel_gangwon.svg",
      title: "강원",
    },
    {
      id: "6번글",
      image: "/categoryImage/img_hotel_jeju.svg",
      title: "제주",
    },
  ];

  const PopData = [
    { id: "1번 굴", image: "/categoryImage/HotelImg/pop_01.svg", name: "김포 마리나베이 호텔", rate: "4.0", count: "136", distance: "김포공항역 3분", price: 75000 },
    {
      id: "2번 굴",
      image: "/categoryImage/HotelImg/pop_02.svg",
      name: "더블유 에비뉴 김포",
      rate: "4.0",
      count: "136",
      distance: "김포공항역 5분",
      price: 85000,
    },
    {
      id: "3번 굴",
      image: "/categoryImage/HotelImg/pop_03.svg",
      name: "리벨 닷지 호텔",
      rate: "4.0",
      count: "136",
      distance: "경단역 5분",
      price: 85000,
    },
    {
      id: "4번 굴",
      image: "/categoryImage/HotelImg/pop_04.svg",
      name: "김포 B hotel",
      rate: "4.0",
      count: "136",
      distance: "김포공항역 10분",
      price: 85000,
    },

    {
      id: "5번 굴",
      image: "/categoryImage/HotelImg/pop_05.svg",
      name: "호텔 Arbo",
      rate: "4.0",
      count: "136",
      distance: "아시아 게임 주 경기장 5분",
      price: 85000,
    },
    {
      id: "6번 굴",
      image: "/categoryImage/HotelImg/pop_06.svg",
      name: "호텔 더 루티크",
      rate: "4.0",
      count: "136",
      distance: "김포공항역 3분",
      price: 85000,
    },
  ];

  return <HotelView titleData={titleData} data={data} popData={PopData} />;
};

export default HotelPage;
