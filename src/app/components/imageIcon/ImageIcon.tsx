import React from "react";
import cn from "classnames/bind";
import styles from "./ImageIcon.module.scss";
import Image from "next/image";

const cx = cn.bind(styles);

type ImageIconProps = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  borderRadius?: string | number;
  className?: string;
};

export const ImageIcon = (props: ImageIconProps) => {
  const { src, alt, height = 91, width = 91, borderRadius = 5, className } = props;

  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      style={{
        borderRadius: `${borderRadius.toString().endsWith("%") ? `${borderRadius}%` : `${borderRadius}px`}`,
      }}
      className={cx("ImageIcon", className)}
    />
  );
};
