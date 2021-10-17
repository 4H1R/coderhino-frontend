import axios from "libs/axios";

export default async function register(data) {
  try {
    const resp = await axios.post("/api/signup/", data);
    console.log(resp);
  } catch (e) {
    console.log(e.response.status);
  }
}
