import FAQView from "@/views/Mypage/FAQ/FAQ.view";

const data = [
    {
        question: "예약확인은 어떻게 하나요?",
        answer: "예약은 마이페이지 내 '예약내역'에서 확인할 수 있습니다. 예약내역에서 과거내역부터 실시간으로 예약한 내역을 확인할 수 있으며, 상세보기를 통해 숙소 정보 및 결제 수단을 확인할 수 있습니다.",
    },
    {
        question: "예약 대기 건 예약 취소하고 싶어요",
        answer: "예약 대기 중인 예약은 '예약내역'에서 취소할 수 있습니다.",
    },
    {
        question: "여러 개의 객실을 동시에 예약할 수 있나요?",
        answer: "한 번에 하나의 객실만 예약이 가능합니다. 자세한 사항은 각 숙소의 예약 안내를 참고해 주세요.",
    },
    {
        question: "예약취소했는데 언제 환불되나요?",
        answer: "환불은 취소 후 3~5 영업일 내에 처리됩니다.",
    },
    {
        question: "금액이 실시간으로 변경되는 이유는 뭔가요?",
        answer: "각 상품에 따라 실시간으로 금액이 변동될 수 있습니다.",
    },
];

export default function FAQ() {
    return <FAQView data={data} />;
}
