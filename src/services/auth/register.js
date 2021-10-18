import axios from "libs/axios";

export default async function register(data) {
  try {
    const resp = await axios.post("/api/signup/", data);
    return {
      success: true,
      data: resp.data["User has been successfully registered"],
    };
  } catch (e) {
    return { success: false, data: { email: e.response.data[0] } };
  }
}
