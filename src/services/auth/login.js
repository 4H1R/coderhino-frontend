import axios from "libs/axios";

export default async function login(data) {
  try {
    const resp = await axios.post("/api/login/", data);
    console.log(resp);
    return {
      success: true,
      data: resp.data["User has been successfully registered"],
    };
  } catch (e) {
    return { success: false, data: { email: e.response.data["detail"] } };
  }
}
