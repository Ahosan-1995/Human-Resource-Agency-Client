import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
// import UseAxiosPublic from "../Provider/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";




const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  // const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // console.log(result.user);
      Swal.fire({
        title: "Success",
        text: "logged in Successfully",
        icon: "Success",
        confirmButtonText: "Cool",
      });
      navigate("/");
      // const userInfo = {
      //   email: result.user?.email,
      //   name: result.user?.displayName,
      // };
      // axiosPublic.post("/users", userInfo).then((res) => {
      //   console.log(res.data);
      //   navigate("/");
      // });
    });
  };
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
