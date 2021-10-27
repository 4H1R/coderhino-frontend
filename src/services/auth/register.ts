import { AxiosResponse } from "axios";
import axios from "libs/axios";

type dataProps = {
  email: string;
  username: string;
};

export default async function register(data: dataProps) {
  try {
    const resp: AxiosResponse<dataProps> = await axios.post(
      "/api/signup/",
      data
    );
    return {
      wasSuccessful: true,
      data: resp.data,
    };
  } catch (e: any) {
    return { wasSuccessful: false, data: e.response.data };
  }
}
