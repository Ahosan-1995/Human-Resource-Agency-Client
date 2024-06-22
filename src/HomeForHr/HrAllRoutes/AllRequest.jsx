
import { useContext, useState } from 'react';
import menus from '../../../public/menu.json'
import { Helmet } from 'react-helmet-async';
import OnlyRequestedAsset from '../../Hooks/OnlyRequestedAsset';
import Swal from "sweetalert2";
import UseAxiosSecure from '../../Provider/UseAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';



const AllRequest = () => {


  const [requestedAssets, loading, refetch] = OnlyRequestedAsset();
  console.log(requestedAssets);
  const axiosSecure = UseAxiosSecure();
  const currentDate = new Date().toLocaleDateString();
  const { user } = useContext(AuthContext);

    const [currentPage,setCurrentPage]=useState(1);
    const recordsPerPage=10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = requestedAssets.slice(firstIndex,lastIndex);
    const npage=Math.ceil(menus.length/recordsPerPage);
    const numbers = [...Array(npage+1).keys()].slice(1);


    const prePage=()=>{
        if(currentPage !== 1){
            setCurrentPage(currentPage-1);
        }
    }

    const changeCPage =(id)=>{
        setCurrentPage(id);
    }

    const nextPage =()=>{
        if(currentPage !== lastIndex){
            setCurrentPage(currentPage+1);
        }
    }

const handleReject=(id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.delete(`/requestedAsset/${id}`).then((res) => {
        console.log(res);
        // if (res.data.deletedCount>0) {
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        // }
      });
    }
  });
}



const handleApprove=(id)=>{
  const allData = {
    status:'approved',
    approveDate: currentDate,
    approverEmail: user.email,
  };

  console.log(allData);
  fetch(`http://localhost:5000/requestedAsset/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(allData),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      if (data.modifiedCount > 0) {
        // toast('Data added successfully to the database');
        refetch();
        Swal.fire({
          title: "Success",
          text: "Data Information Updated Successfully",
          icon: "Success",
          confirmButtonText: "Cool",
        });
      }
    });
}



  return (
    <div>
      <Helmet>
        <title>Human Agency | HR-Request</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">All request</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Asset name</th>
              <th>Asset type</th>
              <th>Email of requester</th>
              <th>Name of requester</th>
              <th>Request date</th>
              <th>Note</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                records.map((request,index)=><tr key={request._id}>
                    <th>{index+1}</th>
                    <th>{request.productName}</th>
                    <th>{request.productType}</th>
                    <th>{request.requesterEmail
                    }</th>
                    <th>{request.requesterName}</th>
                    <th>{request.requestDate}</th>
                    <th>{request.inputNote}</th>
                    <th>{request.status}</th>
                    <th className='flex gap-2'>
                      <button onClick={()=>handleApprove(request._id)} className='btn'>Approve</button>
                      <button onClick={()=>handleReject(request._id)} className='btn'>Reject</button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
      <nav>
        <ul className='join'>
        
            <li><a href="#" onClick={prePage}>Previous Page</a></li>
            {
                numbers.map((number,index)=><div key={index}>

                    <li className={`join-item btn`}>
                        <a onClick={()=>changeCPage(number)} href="#">{index+1}</a>
                    </li>
                </div>)
            }

            <li><a href="#" onClick={nextPage}>Next Page</a></li>
            
        </ul>
      </nav>
    </div>
  );
};

export default AllRequest;
