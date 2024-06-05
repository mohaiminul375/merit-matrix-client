import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MyApplication = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const {data}=useQuery({
        queryFn:async()=>{
        const {data}=await axiosSecure.get(`/my-application?email=${user.email}`)
        console.log('data insite axios',data)
        return data;
        },
        queryKey:['my-application']
    })
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default MyApplication;