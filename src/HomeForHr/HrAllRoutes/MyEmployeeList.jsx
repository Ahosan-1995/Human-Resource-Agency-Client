import { useContext } from "react";
import OnlyUsersReload from "../../Hooks/OnlyUsersReload";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const MyEmployeeList = () => {
  const [allUsers, loading, refetch] = OnlyUsersReload();
  // console.log(allUsers);
  const { user } = useContext(AuthContext);

  const handleRemove = (email) => {
    const approveStatus = "pending";
    const associatedEmail = "";
    const logo="";

    const allData = {
      approveStatus,
      associatedEmail,
      logo,
    };
    // console.log(allData);
    fetch(`https://assignment12-server-side-smoky.vercel.app/allUsers/${email}`, {
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
          refetch();
          Swal.fire({
            title: "Success",
            text: "Data Information Updated Successfully",
            icon: "Success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Human Agency | HR-Employee</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">My employee list</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
          
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((myUser) =>
              myUser.role === "employee" &&
              myUser.associatedEmail === `${user.email}` ? (
                <tr key={myUser._id}>
                
                  <th>
                    <img
                      className="w-10 rounded-full"
                      alt="Img"
                      src="https://i.ibb.co/ygVzCDL/128-1280406-view-user-icon-png-user-circle-icon-png.png"
                    />
                  </th>
                  <th>{myUser.name}</th>
                  <th>{myUser.role}</th>
                  <th>
                    <button
                      onClick={() => handleRemove(myUser.email)}
                      className="btn"
                    >
                      Remove
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

export default MyEmployeeList;
