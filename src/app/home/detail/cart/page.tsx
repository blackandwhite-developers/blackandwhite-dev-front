"use client";
import Cartview from "@/views/Cart/Cart.View";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { bookingDataAtom } from "@/atoms/bookingDataAtom";

export default function ProductDetailPage() {
  const [bookingData] = useAtom(bookingDataAtom);
  useEffect(() => {
    (async () => {
      try {
        const promises = bookingData.map(async (item) => {
          const response = await fetch(
            `http://localhost:4000/api/rooms/${item}`
          );
          if (!response.ok) {
            throw new Error(`Error fetching data for item ${item}`);
          }
          return await response.json();
        });

        const results = await Promise.all(promises);
        console.log(results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [bookingData]);

  const data = [
    {
      id: "1번 장바구니",
      img: "/images/room/market-91x91/room1.png",
      title: "김포 마리나베이 호텔",
      type: "호텔",
      parlorInfomation: "디럭스 트윈(기준 2명/최대 2명)",
      operate: {
        checkInDate: "2023.06.14(화)",
        checkOutDate: "2023.06.15(수)",
        checkInTime: "16:00",
        checkOutTime: "11:00",
        days: 1,
      },
      price: 75000,
      roomCount: 1,
      discount: 3000,
    },

    {
      id: "2번 장바구니",
      img: "/images/room/market-91x91/room2.png",
      title: "김포 마리나베이 호텔",
      type: "호텔",
      parlorInfomation: "디럭스 트윈(기준 2명/최대 2명)",
      operate: {
        checkInDate: "2023.06.14(화)",
        checkOutDate: "2023.06.15(수)",
        checkInTime: "16:00",
        checkOutTime: "11:00",
        days: 2,
      },
      price: 75000,
      roomCount: 1,
      discount: 3000,
    },
    {
      id: "3번 장바구니",
      img: "/images/room/market-91x91/room3.png",
      title: "김포 마리나베이 호텔",
      type: "호텔",
      parlorInfomation: "디럭스 트윈(기준 2명/최대 2명)",
      operate: {
        checkInDate: "2023.06.14(화)",
        checkOutDate: "2023.06.15(수)",
        checkInTime: "16:00",
        checkOutTime: "11:00",
        days: 3,
      },
      price: 75000,
      roomCount: 1,
      discount: 5000,
    },
  ];

  return <Cartview data={data} />;
}
