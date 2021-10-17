import axios from "libs/axios";

export default async function me() {
  try {
    const resp = await axios.get("/api/users");
    console.log(resp);
  } catch (e) {
    console.log(e.response);
  }
}
