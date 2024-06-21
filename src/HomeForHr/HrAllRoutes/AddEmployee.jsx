import { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import OnlyUsersReload from "../../Hooks/OnlyUsersReload";
import { Helmet } from "react-helmet-async";



const AddEmployee = () => {
//   const allUsers = useLoaderData();
  const { user } = useContext(AuthContext);
  const [allUsers, loading, refetch] = OnlyUsersReload();




//   const {} = allUsers;
//   console.log(allUsers);

  const handleSubmit = (email) => {
    const approveStatus = "approved";
    const associatedEmail = `${user.email}`;

    const allData = {
      approveStatus,
      associatedEmail,
    };

    console.log(allData);
    fetch(`http://localhost:5000/allUsers/${email}`, {
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

  return (
    <div>
      <Helmet>
        <title>Human Agency | HR-Add-Employee</title>
      </Helmet>
      <h2>This is add employee page</h2>
      <div>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Check</th>
              <th>Image</th>
              <th>Name</th>
              <th>Member type</th>
              <th>Add to team</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) =>
              user.role === "employee" &&
              user.role !== "admin" &&
              user.approveStatus === "pending" ? (
                <tr key={user._id}>
                  <th>Check</th>
                  <th className="w-10 rounded-full">
                    <div>
                      <img
                        className="w-10 rounded-full"
                        alt="Img"
                        src="https://i.ibb.co/ygVzCDL/128-1280406-view-user-icon-png-user-circle-icon-png.png"
                      />
                    </div>
                  </th>
                  <th>{user.name}</th>
                  <th>{user.role}</th>
                  <th>
                    <button
                      onClick={() => handleSubmit(user.email)}
                      className="btn"
                    >
                      Add
                    </button>
                  </th>
                </tr>
              ) : (
                ""
              )
            )}
          </tbody>
        </table>

        {/* edit later */}
        {/* <div className="flex justify-evenly">
            <p>Check</p>
            <p>Image</p>
            <p>Name</p>
            <p>Member type</p>
            <p>Add to team</p>
        </div>
        <form>
             <div className="form-control">
                <p>Check box</p>
              </div>
             <div className="form-control">
                <input
                  type="text"
                  placeholder="URL"
                  name="service_image"
                  defaultValue={'hi'}
                  required
                />
              </div>
        </form> */}
      </div>
    </div>
  );
};

export default AddEmployee;
