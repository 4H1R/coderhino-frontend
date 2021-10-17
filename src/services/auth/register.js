import axios from "libs/axios";

export default async function login(data) {
  try {
    const resp = await axios.post("/api/login", data);
    console.log(resp);
  } catch (e) {
    console.log(e.response.status);
  }
}
