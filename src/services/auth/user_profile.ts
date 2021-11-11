import { AxiosResponse } from "axios";
import axios from "libs/axios";
import { useQuery } from "react-query";

export default async function getUserInfo() {
  return await axios.get("/api/user");
}

// type UserInfo = {
//   id: string;
//   username: string;
//   about: string;
//   profilepic: string;
// };

// export default function getUserInfo() {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   return useQuery(
//     ["userinfos"],
//     async () => {
//       const resp: AxiosResponse<Array<UserInfo>> = await axios.get("api/user");
//       console.log(resp.data);
//       return resp.data;
//     },
//   );
// }
