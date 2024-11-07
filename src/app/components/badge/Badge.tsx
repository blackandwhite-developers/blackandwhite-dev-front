import styles from "./badge.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type badgeProps = {
  shape: "square" | "round";
  children: React.ReactNode;
};

export default function Badge(props: badgeProps) {
  const { shape, children } = props;
  return <p className={cx(shape, "badgeName")}>{children}</p>;
}
