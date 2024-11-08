import React from "react";
import styles from "./agree.view.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.wrapper_bottomSheet}>
      <div className={styles.container_bottomSheet}>
        <h1>개인정보 수집 / 이용</h1>
        <p>회사는 회원가입 및 서비스 제공을 위해 이용자의 개인정보를 수집, 이용하며, 그 목적과 처리에 대해 아래와 같이 안내드립니다.</p>
        <p>
          <strong>1. 수집하는 개인정보 항목</strong>
          <br />
          <ul>
            <li>필수항목: 이름, 이메일, 전화번호, 생년월일, 비밀번호</li>
            <li>선택항목: 성별, 주소</li>
          </ul>
        </p>

        <p>
          <strong>2. 개인정보의 수집 및 이용 목적</strong>
          <br />
          <ul>
            <li>회원 가입 및 본인 확인</li>
            <li>서비스 제공 및 고객 지원</li>
            <li>마케팅 및 이벤트 정보 제공 (동의한 경우에 한함)</li>
            <li>서비스 이용 기록, 접속 로그 분석 등 통계 분석을 위한 데이터 활용</li>
          </ul>
        </p>
        <p>
          <strong>3. 개인정보 보유 및 이용 기간</strong>
          <br />
          <ul>
            <li>회원 탈퇴 시까지 보유하며, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보존합니다.</li>
            <li>보존 기간: 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 계약 또는 청약철회에 관한 기록 5년, 소비자 불만 또는 분쟁 처리에 관한 기록 3년 등.</li>
          </ul>
        </p>
        <p>
          <strong>4. 동의 거부 권리 및 불이익</strong>
          <br />
          <ul>
            <li>이용자는 개인정보 제공에 대한 동의를 거부할 권리가 있으며, 이 경우 회원가입이 제한될 수 있습니다.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
