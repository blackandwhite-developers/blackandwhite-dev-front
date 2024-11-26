import Rating from "../RatingStarCount/Rating";
import styles from "./ProductCard.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type ProductCardProps = {
  imageUrl: string;
  label?: string;
  title: string;
  rating: number;
  address: string;
  price: number;
  review?: string[];
};
export default function ProductCard(props: ProductCardProps) {
  const { imageUrl, label, title, rating, address, price, review } = props;

  return (
    <div className={cx("productBox")}>
      <div className={cx("productBoxInn")}>
        <p className={cx("productBoxImage")}>
          <img src={`${imageUrl}`} alt={`${title}`} />
        </p>
        <div className={cx("productBoxInfo")}>
          {label ? <span>{label}</span> : ""}
          <h4>{title}</h4>
          <div className={cx("ratingBox")}>
            <Rating rating={rating} maxRating={5} />
            {review ? <span className={cx("reviews")}>{review}</span> : <span className={cx("reviews")}>0</span>}
          </div>
          <p className={cx("address")}>{address}</p>
          <p className={cx("priceArea")}>{price.toLocaleString()}원</p>
        </div>
      </div>
    </div>
  );
}
