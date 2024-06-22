import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import OnlyUsersReload from "../Hooks/OnlyUsersReload";





const ProfileHR_Employee = () => {
  const { user } = useContext(AuthContext);
  const [allUsers, loading, refetch] = OnlyUsersReload();

    const updateProfile=(e)=>{
      e.preventDefault();
      const name=e.target.name.value;
      // console.log(name);
      const allData={
        name,
      }
      fetch(`https://assignment12-server-side-smoky.vercel.app/allUsers/${user.email}`, {
        method: "PATCH",
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
    }

  return (
    <div>
      <Helmet>
        <title>Human Agency | Profile</title>
      </Helmet>
      <h2>This is hr and employee profile page</h2>
      <form onSubmit={updateProfile} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            defaultValue={user.displayName}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered"
            defaultValue={user.email}
            readOnly
          />
        </div>
        <button className=" text-white btn bg-[#6292a6]">Update</button>
      </form>
    </div>
  );
};

export default ProfileHR_Employee;
