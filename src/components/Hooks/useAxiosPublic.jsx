import axios from 'axios';
const axiosPublic = axios.create({
    baseURL: "https://doc-house-server-side-one.vercel.app",
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;