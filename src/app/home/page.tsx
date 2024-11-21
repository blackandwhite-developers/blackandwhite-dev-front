import React from "react";

import Homeview from "@/views/Home/Home.view";
import { categoryService } from "@/api/services";

const getAllCategories = async () => {
  const res = await categoryService.getAllCategories();
  const category = res.results;
  return { category };
};

const HomePage = async () => {
  const res = await getAllCategories();
  const category = res.category;

  return <Homeview category={category} />;
};

export default HomePage;
