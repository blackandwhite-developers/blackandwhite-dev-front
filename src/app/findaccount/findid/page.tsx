import { userService } from "@/api/services";
import FindIdView from "@/views/FindAccount/FindId/FIndId";

const FindId = async () => {
  const findIdFn = async (name: string, phone: string) => {
    "use server";
    const res = await userService.findId({ body: { name, phone } });
    return res;
  };
  return <FindIdView findIdFn={findIdFn} />;
};

export default FindId;
