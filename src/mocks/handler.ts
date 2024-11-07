import { http, HttpResponse } from "msw";
const homeCategory = await import("./home-category.json");
export const handlers = [
  http.get("http://localhost:3000/api/home-category", () => {
    return HttpResponse.json(homeCategory);
  }),
];
