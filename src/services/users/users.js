import axios from "libs/axios";

export async function getUser(id) {
  const { data } = await axios.get("/api/user/" + id + "/");
  return data;
}
