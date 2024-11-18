import UserInterestView from "@/views/UserSelect/SelectInterest/SelectInterest";

/** 카테고리 데이터 */
const data = [
    {
        title: "호캉스",
        src: "/categoryImage/ic_home_hotel.svg",
    },
    {
        title: "풀빌라",
        src: "/categoryImage/ic_home_pool.svg",
    },
    {
        title: "모텔",
        src: "/categoryImage/ic_home_motel.svg",
    },
    {
        title: "캠핑",
        src: "/categoryImage/ic_home_camping.svg",
    },
    {
        title: "게스트하우스",
        src: "/categoryImage/ic_home_guesthouse.svg",
    },
    {
        title: "레저",
        src: "/categoryImage/ic_home_leisure.svg",
    },
    {
        title: "공항",
        src: "/categoryImage/ic_home_airport.svg",
    },
];

export default function UserInterest() {
    return <UserInterestView data={data} />;
}
