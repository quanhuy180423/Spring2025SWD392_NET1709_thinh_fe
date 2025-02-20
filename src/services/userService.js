import axiosClient from "./axiosClient.js";

export const userService = {
  getUser: async () => {
    const response = await axiosClient.get("/api/auth/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  },
  registerChildProfile: async (data) => {
    const response = await axiosClient.post("/api/user/vac-record", data);
    return response.data;
  },

  getAllChildProfile: async (id) => {
    const response = await axiosClient.get(
      `/api/user/vac-records?userId=${id}`
    );
    return response.reverse();
  },

  updateChildProfile: async (data) => {
    const response = await axiosClient.patch("/api/user/vac-record", data);
    return response;
  },

  deleteChildProfile: async (id) => {
    const response = await axiosClient.delete(`/api/user/vac-record?id=${id}`);
    return response;
  },
};
