import axios from "libs/axios";

export async function getUser(id: number) {
  const { data } = await axios.get("/api/user/" + id + "/");
  return data;
}
