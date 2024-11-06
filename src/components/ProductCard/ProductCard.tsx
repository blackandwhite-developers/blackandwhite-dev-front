import styles from "./ProductCard.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);
type Rating = {
  score: string;
  reviewCount: string;
};
type ProductCardProps = {
  imageUrl: string;
  label: string;
  title: string;
  rating?: Rating | null;
  address: string;
  price: number;
};
export default function ProductCard(props: ProductCardProps) {
  const { imageUrl, label, title, rating, address, price } = props;

  return (
    <div className={cx("productBox")}>
      <div className={cx("productBoxInn")}>
        <p className={cx("productBoxImage")}>
          <img src={`${imageUrl}`} alt={`${title}`} />
        </p>
        <div className={cx("productBoxInfo")}>
          <span>{label}</span>
          <h3>{title}</h3>
          {rating ? (
            <div className={cx("ratingBox")}>
              <p className={cx("ratingScore")}>{rating.score}</p>
              {/* 별점 */}
              <p className={cx("ratingCount")}>({rating.reviewCount})</p>
            </div>
          ) : null}
          <p className={cx("address")}>{address}</p>
          <p className={cx("priceArea")}>{price}</p>
        </div>
      </div>
    </div>
  );
}
