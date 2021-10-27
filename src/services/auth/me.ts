import axios from "libs/axios";

export async function getMe() {
  const { data } = await axios.get("/api/user/");
  return data;
}
