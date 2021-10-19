import axios from "libs/axios";

export default async function login(data) {
  try {
    const resp = await axios.post("/api/login/", data);
    return {
      success: true,
      data: resp.data,
    };
  } catch (e) {
    return { success: false, data: { email: e.response.data["detail"] } };
  }
}
