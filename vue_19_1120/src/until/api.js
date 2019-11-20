import { get } from "./http";
export const indexArtice = data => get("/api/article/list/0/json",data);
