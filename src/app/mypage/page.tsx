import MypageView from "@/views/Mypage/Mypage/Mypage.view";

const data = {
    thumbnail: "/mypage/Thumbnail.png",
    userNickname: "KOKOSHI2024",
    point: 500,
    coupon: 3,
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

export default function Mypage() {
    return <MypageView {...data} />;
}
