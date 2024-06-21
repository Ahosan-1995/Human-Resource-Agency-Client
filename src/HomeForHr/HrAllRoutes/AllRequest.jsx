
import { useState } from 'react';
import menus from '../../../public/menu.json'
import { Helmet } from 'react-helmet-async';



const AllRequest = () => {

    const [currentPage,setCurrentPage]=useState(1);
    const recordsPerPage=10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = menus.slice(firstIndex,lastIndex);
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
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {
                records.map((menu,index)=><tr key={menu._id}>
                    <th>{index+1}</th>
                    <th>{menu.name}</th>
                    <th>{menu.category}</th>
                    <th>{menu.price}</th>
                    <th>Name of requester</th>
                    <th>Request date</th>
                    <th>Note</th>
                    <th>Approve</th>
                    <th>Reject</th>
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
