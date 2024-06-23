import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
// import UseAxiosPublic from "../Provider/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Provider/UseAxiosPublic";





const SocialLogin = () => {
  const { googleSignIn,createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () =>{
      googleSignIn()
      .then(result =>{
          console.log(result.user);
          const userInfo = {
              email: result.user?.email,
              name: result.user?.displayName,
              approveStatus:"pending",
              role:"employee",
          }
          // console.log(userInfo);
          axiosPublic.post('/allUsers', userInfo)
          .then(res =>{

            if (res.data.insertedId) {
              // console.log("user added to the database");
              Swal.fire({
                title: "Success",
                text: "User added Successfully into database",
                icon: "Success",
                confirmButtonText: "Cool",
              });
              
            }
              navigate("/");
          })
      })
  }





  return (
    <div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle></FaGoogle>
          Login with google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
