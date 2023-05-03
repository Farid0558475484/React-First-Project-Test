import { instance, GetItemsType } from "./api";
import { APIResponseType } from "./api";
// import { ProfileType } from "../types/types";


export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)

      .then((res) => res.data)
  },

  follow(userId: number) {
    return instance.post<APIResponseType>(`follow/${userId}`).then((res) => res.data);
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then((res) => res.data) as Promise<ResponseType>;
  },

//   getProfile(userId: number) {
//     console.warn("Obsolete method. Please profileAPI object.");
//     return profileAPI.getProfile(userId);
//   },
};
