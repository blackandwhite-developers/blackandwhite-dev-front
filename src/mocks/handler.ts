import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/login", () => {
    return HttpResponse.json({ username: "admin" });
  }),
  http.get("https://jsonplaceholder.typicode.com/todos", () => {
    return HttpResponse.json({ username: "admin" });
  }),
];
