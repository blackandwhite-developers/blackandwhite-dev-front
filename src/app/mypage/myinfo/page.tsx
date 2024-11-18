import MyInfoView from "@/views/Mypage/MyInfo/MyInfo.view";

const Mypage = () => {
    const data = [
        { label: "이름", name: "name", value: "" },
        { label: "휴대전화 번호", name: "phone", value: "" },
        { label: "생년월일", name: "birthdate", value: "" },
        { label: "닉네임", name: "nickname", value: "" },
    ];

    return <MyInfoView profileFields={data} />;
};

export default Mypage;
