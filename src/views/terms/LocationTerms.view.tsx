import React from "react";
import styles from "./agree.view.module.scss";

const LocationTerms = () => {
  return (
    <div className={styles.wrapper_bottomSheet}>
      <div className={styles.container_bottomSheet}>
        <h1>위치정보 이용 동의</h1>
        <p>회사는 위치 기반 서비스를 제공하기 위해 이용자의 위치 정보를 수집, 이용, 제공하며, 그 목적과 방법에 대해 아래와 같이 안내드립니다.</p>
        <p>
          <strong>1. 위치정보 수집 항목 및 방법</strong>
          <br />
          <ul>
            <li>위치정보: GPS, Wi-Fi, 통신사 기지국 등</li>
            <li>수집 방법: 앱을 통한 위치 정보 수집 (이용자가 위치 정보 제공을 허용한 경우)</li>
          </ul>
        </p>

        <p>
          <strong>2. 위치정보 이용 목적</strong>
          <br />
          <ul>
            <li>근처 매장 검색 및 맞춤형 서비스 제공</li>
            <li>고객 맞춤형 콘텐츠 및 광고 제공</li>
            <li>통계 분석 및 서비스 개선</li>
          </ul>
        </p>
        <p>
          <strong>3. 위치정보의 보유 및 이용 기간</strong>
          <br />
          <ul>
            <li>위치 정보는 이용 목적이 달성된 후 지체 없이 삭제합니다.</li>
          </ul>
        </p>
        <p>
          <strong>4. 위치정보 제3자 제공</strong>
          <br />
          <ul>
            <li>위치 정보를 제3자에게 제공하지 않으며, 법률에 따라 필요한 경우에만 예외적으로 제공될 수 있습니다.</li>
          </ul>
        </p>
        <p>
          <strong>5. 동의 거부 권리</strong>
          <br />
          <ul>
            <li>이용자는 위치정보 제공에 대한 동의를 거부할 권리가 있으며, 이 경우 일부 서비스가 제한될 수 있습니다.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default LocationTerms;
