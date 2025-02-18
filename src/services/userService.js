import axiosClient from "./axiosClient.js";

export const userService = {
    getUser: async () => {
        const response = await axiosClient.post("/api/auth/me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        return response.data;
    }
}

