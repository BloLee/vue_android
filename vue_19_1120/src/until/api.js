import { get } from "./http";
//影人条目信息 
export const indexArtice = data => get("/v2/movie/celebrity/1054395",data);

//Top250
export const top250 = data => get("/v2/movie/top250",data);
//北美票房榜
export const us_box = data => get("/v2/movie/us_box",data);
//口碑榜
export const weekly = data => get("/v2/movie/weekly",data);
//新片榜
export const new_movies = data => get("/v2/movie/new_movies",data);
//正在上映
export const in_theaters = data => get("/v2/movie/in_theaters",data);
//即将上映
export const coming_soon = data => get("/v2/movie/coming_soon",data);