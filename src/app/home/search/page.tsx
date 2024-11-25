"use client"
import SearchView from "@/views/Home/Search/Search.view";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";

const RECENT_SEARCHES_KEY = "recentSearches";
const MAX_RECENT_SEARCHES = 10;

interface PopularSearchItem {
  _id: string;
  keyword: string;
  count: number;
  __v: number;
}

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [popularContent, setPopularContent] = useState<any[]>([]);
  const router = useRouter();

  const aboutData = {
    date: "6.14 수 - 6.15 목",
    member: "성인 2명",
  };

  const addSearchTerm = (term: string) => {
    const savedSearches = JSON.parse(localStorage.getItem(RECENT_SEARCHES_KEY) || "[]");
    const updatedSearches = [term, ...savedSearches.filter((item: string) => item !== term)].slice(0, MAX_RECENT_SEARCHES);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updatedSearches));
  };

  const fetchSearchResults = async (keyword: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/search/?keyword=${keyword}`);
      if (!response.ok) {
        throw new Error("검색 API 불러오기 실패");
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const handleSearch = async (searchTerm: string) => {
    if (searchTerm.trim()) {
      addSearchTerm(searchTerm.trim());
      setIsSearching(true);
      try {
        const data = await fetchSearchResults(searchTerm.trim());
        setSearchResults(data);
        router.push(`/searchResult?query=${encodeURIComponent(searchTerm.trim())}`);
      } catch (error) {
        console.error(error);
      } finally {
        setIsSearching(false);
      }
    }
  };
  
  const recommendData = ["제주", "대구", "여행가고싶다", "겨울바다", "모두연"];

  const fetchPopularContent = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/search/popular?limit=3");
      if (!response.ok) {
        throw new Error("인기 검색어를 불러오는 데 실패했습니다.");
      }
      const data: PopularSearchItem[] = await response.json();
      console.log("Popular Content:", data);
      
      const mappedData = data.map((item, index) => ({
        rank: index + 1,
        content: item.keyword, 
        arrow: item.count > 10 ? <IoIosArrowUp /> : <IoIosArrowDown /> 
      }));
  
      setPopularContent(mappedData);
    } catch (error) {
      console.error(error);
      setErrorMessage("인기 검색어를 불러오는 데 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchPopularContent();
  }, []);
  // const popularContent = [
  //   {
  //     rank: 1,
  //     content: "여름특가",
  //     arrow: <IoIosArrowUp />,
  //   },
  //   {
  //     rank: 2,
  //     content: "여러분",
  //     arrow: <IoIosArrowDown />,
  //   },
  //   {
  //     rank: 3,
  //     content: "힘내요",
  //     arrow: <IoIosArrowUp />,
  //   },
  //   {
  //     rank: 4,
  //     content: "할수있어요",
  //     arrow: <IoIosArrowDown />,
  //   },
  //   {
  //     rank: 5,
  //     content: "화이팅",
  //     arrow: <IoIosArrowUp />,
  //   },
  // ];

  return <SearchView aboutData={aboutData} recommendData={recommendData} popularcontent={popularContent} onSearch={handleSearch}/>;
};

export default SearchPage;
