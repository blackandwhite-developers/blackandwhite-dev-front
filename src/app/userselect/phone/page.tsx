"use client";
import PhoneView from "@/views/UserSelect/Phone/Phone";
import { useRouter } from "next/navigation";

export default function Phone() {
    const router = useRouter();
    const SignUpData = localStorage.getItem("SignUpData");
    const data = SignUpData ? JSON.parse(SignUpData) : null;
    if (!data) {
        router.push("/signup");
    }
    const phoneFunc = async (phone: string) => {
        const newData = {
            ...data,
            profile: {
                ...data.profile,
                phone: phone,
            },
        };
        localStorage.setItem("signUpData", JSON.stringify(newData));
        router.push("/userselect/birth");
    };
    return <PhoneView PhoneFunc={phoneFunc} />;
}
