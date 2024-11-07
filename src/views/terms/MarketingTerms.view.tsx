import React from "react";
import styles from "./agree.view.module.scss";

const MarktingTerms = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>마케팅 정보 수신 동의</h1>
        <p>회사는 다양한 프로모션 및 이벤트 소식을 이용자에게 제공하기 위해 마케팅 정보 수신에 대한 동의를 받고 있습니다.</p>
        <p>
          <strong>1. 수집 및 이용 목적</strong>
          <br />
          <ul>
            <li>서비스 관련 최신 정보 및 프로모션 제공</li>
            <li>맞춤형 광고 및 이벤트 안내</li>
            <li>할인 혜택 및 회원 대상 특별 이벤트 안내</li>
          </ul>
        </p>

        <p>
          <strong>2. 마케팅 정보의 발송 방법</strong>
          <br />
          <ul>
            <li>이메일, 문자 메시지, 푸시 알림을 통해 발송됩니다.</li>
          </ul>
        </p>
        <p>
          <strong>3. 동의 철회 및 관리</strong>
          <br />
          <ul>
            <li>위치 정보는 이용 목적이 달성된 후 지체 없이 삭제합니다.</li>
          </ul>
        </p>
        <p>
          <strong>4. 동의 거부 권리</strong>
          <br />
          <ul>
            <li>이용자는 마케팅 정보 수신에 대한 동의를 거부할 권리가 있으며, 이 경우 프로모션 혜택 및 정보 제공이 제한될 수 있습니다.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default MarktingTerms;
