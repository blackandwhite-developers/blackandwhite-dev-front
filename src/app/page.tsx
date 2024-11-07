import React from "react";
import "./page.scss";
import axios from "axios";

// This is an example of mock data fetching.
// mocks/handlers.ts will intercept the request and return the mock data.
const getData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data;
};

export default async function Home() {
  const data = await getData();
  return (
    <React.Fragment>
      <h1>{data?.username}</h1>
    </React.Fragment>
  );
}
