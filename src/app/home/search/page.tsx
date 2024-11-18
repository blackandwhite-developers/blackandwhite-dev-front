import SearchView from "@/views/Home/Search/Search.view";

const SearchPage = () => {
  const aboutData = {
    date: "6.14 수 - 6.15 목",
    member: "성인 2명",
  };

  const recommendData = ["양양", "강릉", "여행가고싶다", "겨울바다", "모두연"];

  return <SearchView aboutData={aboutData} recommendData={recommendData} />;
};

export default SearchPage;
