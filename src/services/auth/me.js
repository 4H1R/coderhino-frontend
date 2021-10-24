import axios from "libs/axios";

export async function getMe() {
  const { data } = await axios.get("/api/user/");
  return data;
}

export async function putMe(data) {
  const { data: respData } = await axios.patch("/api/me/", data);
  return respData;
}
