import { AxiosResponse } from "axios";
import axios from "libs/axios";
import { useQuery } from "react-query";

interface IBlog {
  id: number;
  message: string;
  date: string;
}

export default function useBlogs() {
  return useQuery(
    ["blogs"],
    async () => {
      const resp: AxiosResponse<Array<IBlog>> = await axios.get("api/blog");
      return resp.data;
    },
    { staleTime: 1000 * 60 * 5 } // 5 min
  );
}
