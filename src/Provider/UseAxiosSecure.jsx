import axios from "axios";



const axiosSecure = axios.create({
    baseURL: 'https://assignment12-server-side-smoky.vercel.app'
})

const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;