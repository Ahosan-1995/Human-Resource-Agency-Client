import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://assignment12-server-side-smoky.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;