import axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "58d03910-01e0-4118-a2a4-f0078c7c10fc",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)

      .then((response) => {
        return response.data;
      });
  },

  getUsers2(currentPage = 1, pageSize = 10) {
    return instance
      .get(`follow?page=${currentPage}&count=${pageSize}`)

      .then((response) => {
        return response.data;
      });
  },


};


