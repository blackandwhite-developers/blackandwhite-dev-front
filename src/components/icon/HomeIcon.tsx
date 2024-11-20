import React from "react";
import style from "./HomeIcon.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(style);

type HomeIconProps = {
  isSelected: boolean;
};

export default function HomeIcon(props: HomeIconProps) {
  const { isSelected } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={cx("MenuIcon", { isSelected })}>
      <path d="M2.40039 9.24418C2.40039 8.85016 2.60094 8.4805 2.9386 8.25215L11.2586 2.62564C11.7027 2.32531 12.2981 2.32531 12.7422 2.62564L21.0622 8.25216C21.3998 8.4805 21.6004 8.85015 21.6004 9.24418V19.7745C21.6004 20.7829 20.7408 21.6004 19.6804 21.6004H4.32039C3.26 21.6004 2.40039 20.7829 2.40039 19.7745V9.24418Z" />
      <path
        d="M7.20039 17.4004H16.8004M11.2586 2.62564L2.9386 8.25215C2.60094 8.4805 2.40039 8.85016 2.40039 9.24418V19.7745C2.40039 20.7829 3.26 21.6004 4.32039 21.6004H19.6804C20.7408 21.6004 21.6004 20.7829 21.6004 19.7745V9.24418C21.6004 8.85016 21.3998 8.4805 21.0622 8.25216L12.7422 2.62564C12.2981 2.32531 11.7027 2.32531 11.2586 2.62564Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
