import axiosClient from "./axiosClient.js";

export const userService = {
    getUser: async () => {
        const response = await axiosClient.get("/api/auth/me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        return response.data;
    },
    registerChildProfile: async (data) => {
        const response = await axiosClient.post('/api/user/vac-record',
            data
        )
        return response.data;
    }
}

