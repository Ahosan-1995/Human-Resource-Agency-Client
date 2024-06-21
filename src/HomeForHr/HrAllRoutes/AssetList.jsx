import { useContext, useState } from "react";
import Select from "react-dropdown-select";
import OnlyAssetsReload from "../../Hooks/OnlyAssetsReload";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Provider/UseAxiosSecure";

// For modal
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

const AssetList = () => {
  // For modal
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [selectedAsset, setSelectedAsset] = useState(null);
  // For modal

  const options = [
    {
      value: 1,
      label: "Available",
    },
    {
      value: 2,
      label: "Out od stock",
    },
    {
      value: 3,
      label: "Returnable",
    },
    {
      value: 4,
      label: "Non-Returnable",
    },
  ];

  const [value, setValues] = useState();
  // console.log(value?.[0]?.label);

  const [allAssets, loading, refetch] = OnlyAssetsReload();
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const currentDate = new Date().toLocaleDateString();

  const handleUpdate = (data) => {
      
      const insertedQunatity = parseInt(data.quantity2,10);
      const note = data.input;
      const quantityOld=parseInt(selectedAsset.quantity, 10);
      const quantity= insertedQunatity+quantityOld;
      // console.log(data._id)

      const allData = {
        quantity,
      };
  
      console.log(allData);
      fetch(`http://localhost:5000/assets/${selectedAsset._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(allData),
      })
      .then(res=>res.json())
          .then(data=>{
              // console.log(data);
              
              if(data.modifiedCount>0){
                  // toast('Data added successfully to the database');
                  refetch();
                  Swal.fire({
                      title: 'Success',
                      text: 'Data Information Updated Successfully',
                      icon: 'Success',
                      confirmButtonText: 'Cool'
                    })
              }
          })
      
  };

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/assets/${id}`).then((res) => {
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
  };

  return (
    <div>
      <Helmet>
        <title>Human Agency | HR-Asset</title>
      </Helmet>
      <div className="flex justify-between">
        <div className="rounded-lg text-black outline flex">
          <input className="h-12 " type="text" />
          <button className="btn ">Search</button>
        </div>

        <div>
          <Select
            options={options}
            onChange={(values) => setValues(values)}
          ></Select>
        </div>

        <div>
          <h2>For sort</h2>
        </div>
      </div>

      <div>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Product name</th>
              <th>Product type</th>
              <th>Product quantity</th>
              <th>Added date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allAssets.map((asset, index) =>
              user.email === asset.email ? (
                <tr key={asset._id}>
                  <th>{index + 1}</th>
                  <th>{asset.productName}</th>
                  <th>{asset.productType}</th>
                  <th>{asset.quantity}</th>
                  <th>{asset.date}</th>
                  <th className="flex gap-2">
                    <div>
                      
                      <div>
                      <button onClick={() => {
                      setSelectedAsset(asset);
                      openModal();
                    }} className="btn">
                      Update
                    </button>
                        <Modal
                          isOpen={modalIsOpen}
                          onAfterOpen={afterOpenModal}
                          onRequestClose={closeModal}
                          style={customStyles}
                          contentLabel="Example Modal"
                        >
                          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                            Update Product Quantity
                          </h2>
                          <button className="btn" onClick={closeModal}>
                            close
                          </button>

                          <form onSubmit={handleSubmit(handleUpdate)}>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">Quantity:{selectedAsset?.quantity}</span>
                              </label>
                              <input
                                type="number"
                                placeholder="Quantity"
                                className="input input-bordered"
                                name="quantity2"
                                required
                                {...register("quantity2", { required: true })}
                              />
                            </div>
                            
                            <button type="submit" className="btn">Update</button>
                          </form>
                          
                        </Modal>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(asset._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ) : (
                ""
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;






// import { useContext, useState } from "react";
// import Select from "react-dropdown-select";
// import OnlyAssetsReload from "../../Hooks/OnlyAssetsReload";
// import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";
// import UseAxiosSecure from "../../Provider/UseAxiosSecure";

// // For modal
// import React from "react";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";
// import { useForm } from "react-hook-form";
// import { Helmet } from "react-helmet-async";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement(document.getElementById("root"));

// const AssetList = () => {
//   // For modal
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
//   const [selectedAsset, setSelectedAsset] = useState(null);
//   // For modal

//   const options = [
//     {
//       value: 1,
//       label: "Available",
//     },
//     {
//       value: 2,
//       label: "Out od stock",
//     },
//     {
//       value: 3,
//       label: "Returnable",
//     },
//     {
//       value: 4,
//       label: "Non-Returnable",
//     },
//   ];

//   const [value, setValues] = useState();
//   // console.log(value?.[0]?.label);

//   const [allAssets, loading, refetch] = OnlyAssetsReload();
//   const { user } = useContext(AuthContext);
//   const axiosSecure = UseAxiosSecure();
//   const { register, handleSubmit, reset } = useForm();
//   const currentDate = new Date().toLocaleDateString();

//   const handleUpdate = (data) => {
      
//       const insertedQunatity = parseInt(data.quantity2,10);
//       const note = data.input;
//       const quantityOld=parseInt(selectedAsset.quantity, 10);
//       const quantity= insertedQunatity+quantityOld;
//       // console.log(data._id)

//       const allData = {
//         quantity,
//         note,
//         requestDate:currentDate,
//       };
  
//       console.log(allData);
//       fetch(`http://localhost:5000/assets/${selectedAsset._id}`, {
//         method: "PUT",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(allData),
//       })
//       .then(res=>res.json())
//           .then(data=>{
//               // console.log(data);
              
//               if(data.modifiedCount>0){
//                   // toast('Data added successfully to the database');
//                   refetch();
//                   Swal.fire({
//                       title: 'Success',
//                       text: 'Data Information Updated Successfully',
//                       icon: 'Success',
//                       confirmButtonText: 'Cool'
//                     })
//               }
//           })
      
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/assets/${id}`).then((res) => {
//           console.log(res);
//           // if (res.data.deletedCount>0) {
//           refetch();
//           Swal.fire({
//             title: "Deleted!",
//             text: "Your file has been deleted.",
//             icon: "success",
//           });
//           // }
//         });
//       }
//     });
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Human Agency | HR-Asset</title>
//       </Helmet>
//       <div className="flex justify-between">
//         <div className="rounded-lg text-black outline flex">
//           <input className="h-12 " type="text" />
//           <button className="btn ">Search</button>
//         </div>

//         <div>
//           <Select
//             options={options}
//             onChange={(values) => setValues(values)}
//           ></Select>
//         </div>

//         <div>
//           <h2>For sort</h2>
//         </div>
//       </div>

//       <div>
//         <table className="table table-xs">
//           <thead>
//             <tr>
//               <th>Sl</th>
//               <th>Product name</th>
//               <th>Product type</th>
//               <th>Product quantity</th>
//               <th>Added date</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allAssets.map((asset, index) =>
//               user.email === asset.email ? (
//                 <tr key={asset._id}>
//                   <th>{index + 1}</th>
//                   <th>{asset.productName}</th>
//                   <th>{asset.productType}</th>
//                   <th>{asset.quantity}</th>
//                   <th>{asset.date}</th>
//                   <th className="flex gap-2">
//                     <div>
                      
//                       <div>
//                       <button onClick={() => {
//                       setSelectedAsset(asset);
//                       openModal();
//                     }} className="btn">
//                       Update
//                     </button>
//                         <Modal
//                           isOpen={modalIsOpen}
//                           onAfterOpen={afterOpenModal}
//                           onRequestClose={closeModal}
//                           style={customStyles}
//                           contentLabel="Example Modal"
//                         >
//                           <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
//                             Update Product Quantity
//                           </h2>
//                           <button className="btn" onClick={closeModal}>
//                             close
//                           </button>

//                           <form onSubmit={handleSubmit(handleUpdate)}>
//                             <div className="form-control">
//                               <label className="label">
//                                 <span className="label-text">Quantity:{selectedAsset?.quantity}</span>
//                               </label>
//                               <input
//                                 type="number"
//                                 placeholder="Quantity"
//                                 className="input input-bordered"
//                                 name="quantity2"
//                                 required
//                                 {...register("quantity2", { required: true })}
//                               />
//                             </div>
//                             <div className="form-control">
//                               <label className="label">
//                                 <span className="label-text">Description</span>
//                               </label>
//                               <input
//                                 type="text"
//                                 placeholder="Notes"
//                                 className="input input-bordered"
//                                 name="input"
//                                 required
//                                 {...register("input", { required: true })}
//                               />
//                             </div>
//                             <button type="submit" className="btn">Update</button>
//                           </form>
                          
//                         </Modal>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => handleDelete(asset._id)}
//                       className="btn"
//                     >
//                       Delete
//                     </button>
//                   </th>
//                 </tr>
//               ) : (
//                 ""
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AssetList;



