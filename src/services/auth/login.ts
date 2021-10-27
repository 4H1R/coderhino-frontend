import { AxiosResponse } from "axios";
import axios from "libs/axios";

type dataProps = {
  email: string;
  password: string;
};

export default async function login(data: dataProps) {
  try {
    const resp: AxiosResponse<dataProps> = await axios.post(
      "/api/login/",
      data
    );
    return { wasSuccessful: true, data: resp.data };
  } catch (e: any) {
    return { wasSuccessful: false, data: { email: e.response.data["detail"] } };
  }
}
