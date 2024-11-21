"use client"
import React, { useEffect, useState } from "react";
import SearchResultPageView from "@/views/SearchResult/SearchResult.view";

const searchResultPage = () => {
  const [data, setData] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchLodgesData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/lodges/?categoryId=673b1682a13a15500742e04d"
        );
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.");
        }
        const result = await response.json();
        setData(result);
        setLoading(false); 
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        setLoading(false);
      }
    };

    fetchLodgesData();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return <SearchResultPageView data={data} />;
};

export default searchResultPage;
