import { Helmet } from "react-helmet-async";
import OnlyAssetsReload from "../../Hooks/OnlyAssetsReload";
import OnlyUsersReload from "../../Hooks/OnlyUsersReload";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

// For modal
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
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

const RequestAsset = () => {
  const { user } = useContext(AuthContext);
  const [allAssets, loading, refetch] = OnlyAssetsReload();
  const [allUsers] = OnlyUsersReload();
  const { register, handleSubmit, reset } = useForm();
  const currentDate = new Date().toLocaleDateString();
  const axiosSecure=UseAxiosSecure();

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

  const handleRequest = async(data) => {
    const requesterEmail=user.email;
    const requesterName=user.displayName;

    const allData = {
              requesterEmail,
              requesterName,
              requestDate:currentDate,
              inputNote:data.inputNote,
              productName:data.productName,
              productType:data.productType,
              availability:data.availability,
              status:data.status,
            };

            axiosSecure.post('/requestedAsset', allData)
            .then(res=>{
                if(res.data.insertedId){
                  refetch();
                  Swal.fire({
                    title: "Success",
                    text: "Data Information Updated Successfully",
                    icon: "Success",
                    confirmButtonText: "Cool",
                  });
                    reset();
                }
            })
  };

  return (
    <div>
      <Helmet>
        <title>Human Agency | Employee-Request-Asset</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">
        This is employee request an asset page
      </h2>
      <div>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Asset name</th>
              <th>Asset type</th>
              <th>Availability</th>
              <th>Request</th>
            </tr>
          </thead>
          <tbody>
            {allAssets.map((asset) => (
              <tr key={asset._id}>
                <th>{asset.productName}</th>
                <th>{asset.productType}</th>
                <th>{asset.quantity == 0 ? "Out Of stock" : "available"}</th>
                <th>
                  {asset.quantity == 0 ? (
                    <button disabled className="btn">
                      Request
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={() => {
                          setSelectedAsset(asset);
                          openModal();
                        }}
                        className="btn"
                      >
                        Request
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
                          <button className="w-12 rounded-md  bg-slate-300" onClick={closeModal}>
                            close
                          </button>
                        </div>

                        <form onSubmit={handleSubmit(handleRequest)}>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Note</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Notes"
                              className="input input-bordered"
                              name="inputNote"
                              required
                              {...register("inputNote", { required: true })}
                            />
                          </div>
                          <div className="form-control">
                            <input
                              type="text"
                              placeholder="productName"
                              className="input input-bordered"
                              name="productName"
                              defaultValue={asset.productName}
                              {...register("productName")}
                              hidden
                            />
                          </div>
                          <div className="form-control">
                            <input
                              type="text"
                              placeholder="productType"
                              className="input input-bordered"
                              name="productType"
                              defaultValue={asset.productType}
                              {...register("productType")}
                              hidden
                            />
                          </div>
                          <div className="form-control">
                            <input
                              type="text"
                              placeholder="availability"
                              className="input input-bordered"
                              name="availability"
                              defaultValue={asset.quantity == 0 ? "Out Of stock" : "available"}
                              {...register("availability")}
                              hidden
                            />
                          </div>
                          <div className="form-control">
                            <input
                              type="text"
                              placeholder="status"
                              className="input input-bordered"
                              name="status"
                              defaultValue={"pending"}
                              {...register("status")}
                              hidden
                            />
                          </div>
                          <button type="submit" className="btn">
                            Request
                          </button>
                        </form>
                      </Modal>
                    </div>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestAsset;
