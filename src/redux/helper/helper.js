import axios from "axios";

const baseURL = "https://interviewtesting.onrender.com/v1/users/";


export const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
