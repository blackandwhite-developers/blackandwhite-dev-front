import { DisableBtn } from "../components/Button/DisableBtn";
import { NomalBtn } from "../components/Button/NomalBtn";
import { AbleBtn } from "../components/Button/AbleBtn";
import { FindPasswordBtn } from "../components/Button/FindPasswordBtn";
import { LoginBtn } from "../components/Button/LoginBtn";
import { DateBtn } from "../components/Button/DateBtn";
import { MemberBtn } from "../components/Button/MemberBtn";
import { ListBtn } from "../components/Button/ListBtn";
import { MapBtn } from "../components/Button/MapBtn";
import { ClickListBtn } from "../components/Button/ClickListBtn";
import { ResearchBtn } from "../components/Button/ResearchBtn";

const productList = () => {
  const categori = ["모텔", "호텔", "팬션/풀빌라", "캠핑", "게스트하우스", "레저/티켓", "해외숙소", "항공"];
  const categoriImg = ["motel", "hotel", "pool", "camping", "guesthouse", "leisure", "othercountry", "airport"];
  return (
    <div>
      <header className={cx("header-container")}>
        <div className={cx("logo")}>
          <img src="home/img_home_logo.svg" alt="kokoshi-logo" />
        </div>
        <div className={cx("bell")}>
          <PiBellSimple style={{ width: "20px", height: "20px" }} />
        </div>
      </header>
      <main className={cx("main-container")}>
        <h4>서치바 넣을자리</h4>

        <div className={cx("grid-container")}>
          {categori.map((a, i) => {
            return (
              <div className={cx("grid-item")} key={i}>
                <img src={`/categoryImage/ic_home_${categoriImg[i]}.svg`} alt="motel" />
                <div className={cx("title")}>{categori[i]}</div>
              </div>
            );
          })}
        </div>

        <div className={cx("banner")}>
          <img src="/home/img_home_banner.svg" alt="" />
        </div>

        <div className={cx("currentList")}>
          <h4>최근 본 숙소</h4>
          <div className={cx("list")}>
            <div className="list-image"></div>
            <div className="list-title">
              <p>코코시하우스</p>
            </div>
            <div className="list-price">
              <p>45,000원</p>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default productList;
