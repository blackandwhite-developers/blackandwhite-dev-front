import React from "react";
import "./PushAlarm.css";
import Image from "next/image";

const PushAlarm = () => {
  return (
    <div className="wrap">
      <div className="push-time">
        <p>3분 전</p>
      </div>
      <div className="main-container">
        <Image
          src="/public/icon-asset/logo-icon.png"
          alt="pushalarm image"
          width={200}
          height={200}
        />
        <div className="push-text">
          <p className="title">(광고) 푸쉬알람</p>
          <p className="content">
            푸쉬 알람과 관련된 프로모션 내용에 대한 텍스트가 들어갑니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PushAlarm;
