import React from "react";
import style from "./FooterIcon.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(style);

type MapIconProps = {
  isSelected: boolean;
};

export default function MapIcon(props: MapIconProps) {
  const { isSelected } = props;
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cx("MenuIcon", { isSelected })}>
      <path d="M9.90983 0C4.44949 0 0.0146484 4.43484 0.0146484 9.89519C0.0146484 15.3555 4.44949 19.7904 9.90983 19.7904C15.3702 19.7904 19.805 15.3555 19.805 9.89519C19.805 4.43484 15.3702 0 9.90983 0ZM13.1213 14.393L9.90983 12.9717L6.6984 14.393L6.36556 14.0602L9.90983 5.39737L13.4631 14.0602L13.1213 14.393Z" />
    </svg>
  );
}
