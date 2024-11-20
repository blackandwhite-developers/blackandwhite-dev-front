"use client";
import BirthView from "@/views/UserSelect/Birth/Birth";
import { useRouter } from "next/navigation";

export default function Birth() {
    const router = useRouter();
    const signUpData = localStorage.getItem("signUpData");
    const data = signUpData ? JSON.parse(signUpData) : null;
    if (!data) {
        router.push("/signup");
    }
    const BirthFunc = async (birth: string) => {
        const newData = {
            ...data,
            profile: {
                ...data.profile,
                birth: birth,
            },
        };
        localStorage.setItem("signUpData", JSON.stringify(newData));
        router.push("/userselect/gender");
    };
    return <BirthView BirthFunc={BirthFunc} />;
}
