import WishListView from "@/views/Mypage/WishList/WishList.view";
const data = [
    {
        roomImage: "/images/HotelImage1.png",
        roomType: "호텔",
        roomName: "김포 마리나베이 호텔",
        rating: "4.5",
        starRating: "4.5",
        review: 1200,
        location: "김포공항역 3분",
        price: "30,000원",
    },
    {
        roomImage: "/images/HotelImage1.png",
        roomType: "펜션",
        roomName: "고성 호크 펜션",
        rating: "4.0",
        starRating: "4.0",
        review: 800,
        location: "부산, 대한민국",
        price: "₩ 20,000",
    },
];

export default function WishList() {
    return <WishListView data={data} />;
}
