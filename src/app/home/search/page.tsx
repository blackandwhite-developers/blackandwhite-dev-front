import SearchView from "@/views/Home/Search/Search.view";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const SearchPage = () => {
  const aboutData = {
    date: "6.14 수 - 6.15 목",
    member: "성인 2명",
  };

  const recommendData = ["양양", "강릉", "여행가고싶다", "겨울바다", "모두연"];

  const popularContent = [
    {
      rank: 1,
      content: "여름특가",
      arrow: <IoIosArrowUp />,
    },
    {
      rank: 2,
      content: "여러분",
      arrow: <IoIosArrowDown />,
    },
    {
      rank: 3,
      content: "힘내요",
      arrow: <IoIosArrowUp />,
    },
    {
      rank: 4,
      content: "할수있어요",
      arrow: <IoIosArrowDown />,
    },
    {
      rank: 5,
      content: "화이팅",
      arrow: <IoIosArrowUp />,
    },
  ];

  return <SearchView aboutData={aboutData} recommendData={recommendData} popularcontent={popularContent} />;
};

export default SearchPage;
