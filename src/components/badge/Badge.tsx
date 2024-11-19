import styles from "./badge.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type badgeProps = {
  shape: "square" | "round";
  color?: "point" | "black";
  children: React.ReactNode;
};

export default function Badge(props: badgeProps) {
  const { shape, color, children } = props;
  return <p className={cx(shape, color, "badgeName")}>{children}</p>;
}
