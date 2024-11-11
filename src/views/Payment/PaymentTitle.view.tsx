"use client";
import cn from "classnames/bind";
import styles from "./PaymentTitle.view.module.scss";

interface PaymentTitleProps {
  title?: string;
  required?: boolean;
  children: React.ReactNode;
}
const cx = cn.bind(styles);

export default function PaymentTitle(props: PaymentTitleProps) {
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
