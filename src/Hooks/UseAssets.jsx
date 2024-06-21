import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Provider/UseAxiosPublic";
import UseAuth from "./UseAuth";







const UseAssets = () => {
const {user}=UseAuth()
   const axiosPublic = UseAxiosPublic();
   const {data: assets=[],isLoading: loading, refetch}=useQuery({
    queryKey: ['assets',user?.email],
    queryFn: async()=>{
        const res=await axiosPublic.get(`/assets?email=${user?.email}`);
        return res.data;
    }
   })
   return[assets,loading,refetch];
};

export default UseAssets;