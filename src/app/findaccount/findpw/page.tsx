import { userService } from "@/api/services";
import FindPwView from "@/views/FindAccount/FindPw/FIndPw";

const FindPw = () => {
  const findPwFn = async (email: string, name: string) => {
    "use server";
    try {
      const res = await userService.authPassword({
        body: { email: email, name: name },
      });
      if (!res.isSuccess) {
        throw new Error("비밀번호 찾기에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      return { result: false, error: error };
    }
    return { result: true, error: null };
  };
  return <FindPwView findPwFn={findPwFn} />;
};

export default FindPw;
