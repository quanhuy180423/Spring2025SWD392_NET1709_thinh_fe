import axiosClient from "./axiosClient.js";

export const blogService = {
  getAllBlog: async () => {
    const response = await axiosClient.get(
      "/api/user/blogs?page=0&size=10&sort=id&direction=asc"
    );
    return response.reverse();
  },

  getDetailBlog: async (id) => {
    const response = await axiosClient.get(`/api/staff/blog?blogId=${id}`);
    return response;
  },

  createBlog: async (data) => {
    const response = await axiosClient.post("/api/staff/blog", data);
    return response;
  },

  updateBlog: async (data) => {
    const response = await axiosClient.patch("/api/staff/blog", data);
    return response;
  },

  deleteBlog: async (id) => {
    const response = await axiosClient.delete(`/api/staff/blog?blogId=${id}`);
    return response;
  },
};
