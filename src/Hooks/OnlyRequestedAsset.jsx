import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Provider/UseAxiosPublic";

const OnlyRequestedAsset = () => {
    const axiosPublic = UseAxiosPublic();
   const {data:requestedAssets=[],isLoading:loading,refetch}=useQuery({
    queryKey: ['requestedAsset'],
    queryFn: async()=>{
        const res=await axiosPublic.get('/requestedAsset');
        return res.data;
    }
   })
   return [requestedAssets,loading,refetch];
};

export default OnlyRequestedAsset;