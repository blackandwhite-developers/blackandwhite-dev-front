interface ILoginResponse {
  id: string;
  name: string;
  email: string;
  role?: string;
  profile: {
    /** ID */
    id: string;
    /** 연락처 */
    phone: string;
    /** 생년월일 */
    birth: string;
    /** 성별 */
    gender?: string;
    /** 관심사 */
    interest: string;
    /** 닉네임 */
    nickname: string;
  };
}
