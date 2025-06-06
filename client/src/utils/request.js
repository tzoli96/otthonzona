import axios from "axios";
import Cookies from "js-cookie";

export const api = /localhost/.test(window.location)
    ? "https://justadev.xyz"
    : /dev.otthonzona.com/.test(window.location)
        ? "https://justadev.xyz"
        : "https://justadev.xyz";

const toQuery = (query) => {
  let queryStr = "";
  for (let x in query) {
    queryStr += `${x}=${query[x]}&`;
  }
  return queryStr.slice(0, -1) ? "?" + queryStr.slice(0, -1) : "";
};

export const request = async (
    route,
    { params = "", body = "", query = {}, method = "GET", signal } = {}
) => {
  try {
    const response = await axios({
      method,
      url: `${api}${route}${params}${toQuery(query)}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("_auth")}`,
      },
      withCredentials: true,
      data: method === "GET" ? null : body,
      signal,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
