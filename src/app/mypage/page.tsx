"use client";

import useMyInfo from "@/app/hooks/useMyInfo";
import MypageView from "@/views/Mypage/Mypage/Mypage.view";

export default function Mypage() {
  const myInfo = useMyInfo();
  if (!myInfo) return null;

  console.log(myInfo);

  const data = {
    thumbnail: "/mypage/Thumbnail.png",
    userNickname: myInfo.info?.profile.nickname || "",
    point: myInfo.info?.point,
    coupon: myInfo.info?.coupon.length,
    category: {
      wishlist: ["/mypage/wishlist"],
      reservationList: ["/mypage/reservation"],
      faqList: ["/mypage/faq"],
    },
    categoryLinks: [
      { title: "위시리스트", href: "/mypage/wishlist" },
      { title: "예약내역", href: "/mypage/reservation" },
      { title: "자주 묻는 질문", href: "/mypage/faq" },
    ],
  };

  return <MypageView {...data} />;
}
