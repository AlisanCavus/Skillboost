import { api } from "./axiosInst";
import { CurrentUser } from "@/types/generalTypes";

export const getUserInfo = async (token: string) => {
  const { data } = await api.get<CurrentUser>("/current/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const postUserInfo = async (token: string, data: CurrentUser) => {
  const { data: response } = await api.post<CurrentUser>(
    "/current/user",
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response;
}
