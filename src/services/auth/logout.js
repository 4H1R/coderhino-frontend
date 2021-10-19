import axios from "libs/axios";

export default async function logout() {
  return await axios.post("/api/logout");
}
