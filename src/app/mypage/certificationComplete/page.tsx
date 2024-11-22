"use client";
import CertificationCompleteView from "@/views/Mypage/CertificationComplete/CertificationComplete.view";
import useMyInfo from "@/app/hooks/useMyInfo";

const CertificationComplete = () => {
    const res = useMyInfo();
    if (!res) return null;
    const data = [
        { label: "이름", name: "name", value: res.info?.name ?? "" },
        {
            label: "휴대전화 번호",
            name: "phone",
            value: res.info?.profile.phone ?? "",
        },
        {
            label: "생년월일",
            name: "birthdate",
            value: res.info?.profile.birth ?? "",
        },
        {
            label: "닉네임",
            name: "nickname",
            value: res.info?.profile.nickname ?? "",
        },
    ];

    return <CertificationCompleteView profileFields={data} />;
};

export default CertificationComplete;
