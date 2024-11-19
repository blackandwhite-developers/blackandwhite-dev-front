import styles from "./Button.module.scss";
import cn from "classnames/bind";
const cx = cn.bind(styles);
interface PaymentMethodButtonProps {
  icon: string;
  isSelected: boolean;
  method: string;
  idx: number;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, idx: number) => void;
}

export default function PaymentMethodButton(props: PaymentMethodButtonProps) {
  return (
    <div className={cx("button-box", { active: props.isSelected })}>
      <button
        type="button"
        className={cx("button-icon")}
        onClick={(e) => props.handleClick(e, props.idx)}
      >
        <img src={props.icon} alt="method-icon" className={cx("method-icon")} />
        <p>{props.method}</p>
      </button>
    </div>
  );
}
