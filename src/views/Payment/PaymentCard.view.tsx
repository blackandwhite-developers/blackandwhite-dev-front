"use client";
import cn from "classnames/bind";
import styles from "./PaymentCard.view.module.scss";

interface PaymentCardProps {
  title?: string;
  required?: boolean;
  children: React.ReactNode;
}
const cx = cn.bind(styles);

export default function PaymentCard(props: PaymentCardProps) {
  const { title, required = false, children } = props;

  return (
    <div className={cx("wrapper")}>
      {title && (
        <div className={cx("card-header")}>
          <p className={cx(required ? "title-required" : "title")}>{title}</p>
        </div>
      )}
      {children}
    </div>
  );
}
