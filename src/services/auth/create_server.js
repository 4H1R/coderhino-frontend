import axios from "libs/axios";

export default async function createServer(data) {
  try {
    const resp = await axios.post("/api/create_server/", data);
    return {
      success: true,
      data: resp.data,
    };
  } catch (e) {
    return {
      success: false,
      data: {
        server_name: e.response.data["server_name"],
        server_picture: e.response.data["server_picture"],
      },
    };
  }
}
