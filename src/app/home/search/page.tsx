import SearchView from "@/views/Home/Search/Search.view";

const SearchPage = () => {
  const aboutData = {
    date: "6.14 수 - 6.15 목",
    member: "성인 2명",
  };

  return <SearchView aboutData={aboutData} />;
};

export default SearchPage;
