"use client";
import { userService } from "@/api/services";
import CertificationCompleteView from "@/views/Mypage/CertificationComplete/CertificationComplete.view";

const CertificationComplete = () => {
  const changeInfoFn = async (data: { name: string; phone: string; birth: string; nickname: string; profilePicture: string }) => {
    try {
      const result = await userService.updateMyInfo({
        body: {
          name: data.name,
          profile: {
            phone: data.phone,
            birth: data.birth,
            nickname: data.nickname,
            profileImage: data.profilePicture,
          },
        },
      });
      if (!result.isSuccess) {
        throw new Error("정보 변경에 실패했습니다.");
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  return <CertificationCompleteView changeInfoFn={changeInfoFn} />;
};

export default CertificationComplete;
