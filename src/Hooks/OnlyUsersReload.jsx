import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Provider/UseAxiosPublic";






const OnlyUsersReload = () => {
  
   const axiosPublic = UseAxiosPublic();
   const {data:allUsers=[],isLoading:loading,refetch}=useQuery({
    queryKey: ['allUsers'],
    queryFn: async()=>{
        const res=await axiosPublic.get('/allUsers');
        return res.data;
    }
   })
   return [allUsers,loading,refetch];
};

export default OnlyUsersReload;