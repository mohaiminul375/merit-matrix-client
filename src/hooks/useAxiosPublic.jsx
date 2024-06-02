import axios from 'axios';

const axiosPublic=axios.create({
    baseURL:'https://merit-matrix-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;