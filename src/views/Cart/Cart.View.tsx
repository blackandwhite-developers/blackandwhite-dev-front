// 화면설계서 #37 참고
"use client";
import React, { useState } from "react";
import styles from "./Cart.view.module.scss";
import cn from "classnames/bind";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { RiHome6Line } from "react-icons/ri";
import DefaultCheckBox from "@/app/components/checkbox/default/DefaultCheckbox";
import Badge from "@/app/components/badge/Badge";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { Dialog } from "@/app/components/dialog/Dialog";

const cx = cn.bind(styles);

export interface CartviewProps {
  data: Array<{
    id: string;
    img: string;
    title: string;
    type: string;
    parlorInfomation: string;
    operate: {
      checkInDate: string | number;
      checkOutDate: string;
      checkInTime: string;
      checkOutTime: string;
      days: number;
    };
    price: number;
    roomCount: number;
    discount: number;
  }>;
}

const Cartview = (props: CartviewProps) => {
  const { data } = props;
  const totalPrice = data.reduce((sum, item) => sum + item.price * item.operate.days, 0);
  const discountPrice = data.reduce((sum, item) => sum + item.discount, 0);
  const resultPrice = totalPrice - discountPrice;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCheckBoxClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className={cx("cart-container")}>
      <Header title={"객실상세"} leftIcon={<FaAngleLeft />} rightIcon={<RiHome6Line />} />

      <div className={cx("select-container")}>
        <div className={cx("defaultCheckBox")}>
          <DefaultCheckBox label="전체 선택 " />
        </div>
        <button className={cx("outline-btn")}> 선택 삭제 </button>
      </div>

      {data.map((item, index) => (
        <div
          className={cx("main-container", {
            "last-item": index === data.length - 1,
          })}
          key={index}
        >
          <div className={cx("main-info")}>
            <DefaultCheckBox label={""} onChange={handleCheckBoxClick} />
            <div className={cx("info")}>
              <div className={cx("top-info")}>
                <div className={cx("img")}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={cx("room-info")}>
                  <Badge shape="round">{item.type}</Badge>
                  <p className={cx("title")}>{item.title}</p>
                  <p className={cx("date")}>
                    {item.operate.checkInDate} ~ {item.operate.checkOutDate}
                  </p>
                  <p className={cx("parlorInfomation")}>
                    {item.parlorInfomation}, {item.operate.days}박
                  </p>
                </div>
              </div>
              <div className={cx("middle-info")}>
                <span className={cx("time")}>이용시간</span>
                <span className={cx("checkIn")}>체크인 : {item.operate.checkInTime}</span>
                <span className={cx("checkOut")}>체크아웃 : {item.operate.checkOutTime}</span>
              </div>
              <div className={cx("bottom-info")}>
                <Badge shape="square">{"선착순 3,000원 특가"}</Badge>
                <div className={cx("rest-info")}>
                  <p className={cx("count")}>{item.roomCount}개 남음</p>
                  <p className={cx("price")}>{item.price}원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={cx("bottom-container")}>
        <p> 할인 및 결제 정보</p>
        <div className={cx("payment-info")}>
          <div className={cx("payment")}>
            <span>결제 금액</span>
            <span>{totalPrice}원</span>
          </div>
          <div className={cx("discount")}>
            <span>할인 금액</span>
            <span>-{discountPrice}</span>
          </div>

          <div className={cx("amount-price")}>
            <span>결제 예상 금액</span>
            <span>{resultPrice}</span>
          </div>
        </div>

        <div className={cx("rule")}>
          <li>결제 예상 금액은 현재 프로모션과 객실 여부에 따라 달라질 수 있습니다.</li>
          <li>장바구니에 담긴 상품은 최대 30일간 보관되며 최대 15개의 상품을 담을 수 있습니다.</li>
        </div>

        <div className={cx("bottom-sheet")}>
          <div className={cx("amount-count")}>
            <span>총{data.length}건</span>
            <div className={cx("cash")}>
              <span className={cx("cash-results")}>결제 예상 금액</span>
              <span className={cx("cash-total")}>{resultPrice}</span>
            </div>
          </div>
          <AbleBtn label="예약하기" />
        </div>
      </div>
      {isDialogOpen && <Dialog title="삭제하기" content={"선택한 상품을 삭제하시겠습니까?"} leftButtonText="취소" rightButtonText="삭제" onLeftButtonClick={handleCloseDialog} onRightButtonClick={handleCloseDialog} />}
    </div>
  );
};
export default Cartview;
