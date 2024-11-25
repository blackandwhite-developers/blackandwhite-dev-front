import { userService } from "@/api/services";
import NewPasswordView from "@/views/FindAccount/NewPassword/NewPassword";

const NewPassword = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const email = (await searchParams).email;
  const name = (await searchParams).name;
  if (!email || !name) {
    return <div>잘못된 접근입니다.</div>;
  }
  if (typeof email === "object" || typeof name === "object") {
    return <div>잘못된 접근입니다.</div>;
  }

  const resetPasswordFn = async (password: string) => {
    "use server";
    try {
      const res = await userService.resetPassword({
        body: { password },
        params: { email, name },
      });
      if (!res.isSuccess) {
        throw new Error("비밀번호 변경에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  };

  return <NewPasswordView resetPasswordFn={resetPasswordFn} />;
};

export default NewPassword;
