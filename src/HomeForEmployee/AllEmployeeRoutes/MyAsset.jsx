import { Helmet } from "react-helmet-async";

import OnlyRequestedAsset from "../../Hooks/OnlyRequestedAsset";
import Swal from "sweetalert2";

import React, { useContext, useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// For modal

import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../Provider/UseAxiosSecure";

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
// For modal

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyAsset = () => {
  const [requestedAssets, loading, refetch] = OnlyRequestedAsset();
  const { user } = useContext(AuthContext);
  // console.log(requestedAssets);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = UseAxiosSecure();


  // console.log(allUsers);
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

  const handlePrint = () => {};


  const handleRemove=(id)=>{
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
          // console.log(res);
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

  return (
    <div>
      <Helmet>
        <title>Human Agency | Employee-Asset</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">
        This is employee my asset page
      </h2>
      <div className="flex justify-between">
        <p>Search</p>
        <p>Filter</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-center">Asset List</p>

        <div>
          <table className="table table-xs">
            <thead>
              <tr>
                
                <th>Asset name</th>
                <th>Asset type</th>
                <th>Request date</th>
                <th>Approval date</th>
                <th>Request status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requestedAssets.map((asset, index) => (
                user?.email==asset.requesterEmail?
                <tr key={asset._id}>
               
                  <th>{asset.productName}</th>
                  <th>{asset.productType}</th>
                  <th>{asset.requestDate}</th>
                  <th>{asset.status === "pending" ? "" : asset.approveDate}</th>
                  <th>{asset.status}</th>
                  <th>
                    {asset.approveDate ? (
                      <button disabled className="btn">
                        Remove
                      </button>
                    ) : (
                      <button onClick={()=>handleRemove(asset._id)}  className="btn">Remove</button>
                    )}
                  </th>
                  {asset.status === "approved" ? (
                    <div>
                      <button
                        onClick={() => {
                          setSelectedAsset(asset);
                          openModal();
                        }}
                        className="btn"
                      >
                        Print
                      </button>
                      <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                      >
                        <div className="flex justify-between">
                          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                            Additional Note:
                          </h2>
                          <button
                            className="w-12 rounded-md  bg-slate-300"
                            onClick={closeModal}
                          >
                            close
                          </button>
                        </div>

                        <form onSubmit={handleSubmit(handlePrint)}>
                          <Document>
                            <Page size="A4" style={styles.page}>
                              <View style={styles.section}>
                                <div>
                                  <p>Product Name:{asset.productName}</p>
                                  <p>Product Type:{asset.productType}</p>
                                  <p>Approve Date:{asset.requestDate}</p>
                                  <p>Approver: {asset.approverEmail}</p>
                                </div>
                              </View>
                            </Page>
                          </Document>
                          <button type="submit" className="btn">
                            Print
                          </button>
                        </form>
                      </Modal>
                    </div>
                  ) : (
                    ""
                  )}
                </tr>
                :
                ""
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAsset;
