import FilterPageView from "@/views/SearchResult/filter/filter.view";

const FilterPage = () => {
  const roomData = ["전체", "호텔", "팬션", "풀빌라", "캠핑", "게스트하우스", "리조트"];
  const keyData = ["여름특가", "수영장", "조식", "야외 수영장", "주차가능", "바다전망", "PC룸"];
  return <FilterPageView roomData={roomData} keyData={keyData} />;
};

export default FilterPage;
