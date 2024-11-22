"use client"
import React, { useEffect, useState } from "react";
import SearchResultPageView from "@/views/SearchResult/SearchResult.view";
import Loading from "@/components/loading/Loading";

interface Lodge {
  _id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  count: number;
  distance: string;
  price: number;
  categoryTitle?: string; 
}

const searchResultPage = () => {
  const [data, setData] = useState<Lodge[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  const fetchCategoryTitle = async (categoryId: string) => {
    try {
      const cid = categoryId;
      const response = await fetch(`http://localhost:4000/api/category/${cid}`);
      if (!response.ok) {
        throw new Error("카테고리 정보를 가져오는 데 실패했습니다.");
      }
      const categoryData = await response.json();
      return categoryData.title;
    } catch (error) {
      console.error("카테고리 정보를 불러오는 중 오류가 발생했습니다.", error);
      return "알 수 없음";  
    }
  };

  useEffect(() => {
    const fetchLodgesData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/lodges/?categoryId=673b1682a13a15500742e04d"
        );
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.");
        }
        const result: Lodge[] = await response.json(); 
        
        const updatedData = await Promise.all(
          result.map(async (item) => {
            const categoryTitle = await fetchCategoryTitle(item.category);
            return {
              ...item,
              categoryTitle, 
            };
          })
        );

        setData(updatedData);
        setLoading(false); 
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        setLoading(false);
      }
    };

    fetchLodgesData();
  }, []);

  if (loading) {
    return <div><Loading/></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return <SearchResultPageView data={data} />;
};

export default searchResultPage;
