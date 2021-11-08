import { AxiosResponse } from "axios";
import axios from "libs/axios";
import { useQuery } from "react-query";

type Invitation = {
  id: number;
  server_name: string;
  message: string;
  response: boolean;
};

export default function getInvites() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(
    ["invites"],
    async () => {
      const resp: AxiosResponse<Array<Invitation>> = await axios.get("api/my_invitations");
      console.log(resp.data);
      return resp.data;
    },
  );
}

export async function inviteAcceptOrReject(data: Invitation) {
  const resp: AxiosResponse<Invitation> = await axios.post(
    "api/my_invitations_response/" + data.id + "/",
    data
  );
  return resp.data
}
