import IdCompleteView from "@/views/FindAccount/IdComplete/IdComplete";

const IdComplete = () => {
    const data = {
        userId: "koko****@email.com",
        signupDate: "2024.11.14 가입",
    };
    return <IdCompleteView userId={data.userId} signupDate={data.signupDate} />;
};

export default IdComplete;
