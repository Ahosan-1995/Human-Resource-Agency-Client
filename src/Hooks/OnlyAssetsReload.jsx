import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Provider/UseAxiosPublic";




const OnlyAssetsReload = () => {
    const axiosPublic = UseAxiosPublic();
   const {data:allAssets=[],isLoading:loading,refetch}=useQuery({
    queryKey: ['assets'],
    queryFn: async()=>{
        const res=await axiosPublic.get('/assets');
        return res.data;
    }
   })
   return [allAssets,loading,refetch];
};

export default OnlyAssetsReload;