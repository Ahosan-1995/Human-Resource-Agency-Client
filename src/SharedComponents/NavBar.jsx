import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import OnlyUsersReload from "../Hooks/OnlyUsersReload";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [allUsers, , refetch] = OnlyUsersReload();




  const [filteredUsers,setFilteredUsers]=useState();

  const [logoForUser,setLogoForUser]=useState();

  useEffect(() => {
    if (allUsers.length > 0) {
      const filtered = allUsers.filter(user1 => user1.email === user.email);
      setFilteredUsers(filtered);
    }
  }, [allUsers,user]);

  // console.log(filteredUsers);

  // const filteredUserAssociatedEmail=filteredUsers[0]?.associatedEmail;
  // console.log(filteredUserAssociatedEmail);

  useEffect(() => {
    const logoForUser = filteredUsers?.[0].logo;

    setLogoForUser(logoForUser);
  }, [filteredUsers]);


  // console.log(logoForUser);













  const userEmail = user?.email;
  console.log(userEmail);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allUsers/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, [userEmail]);

  const role = users?.[0]?.role;

  console.log(role);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const NavOptions = (
    <>
      {user ? (
        ""
      ) : (
        <div className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
        </div>
      )}

      {user ? (
        ""
      ) : (
        <div className="flex">
          <li>
            <Link to="/registerEmp">Join as employee</Link>
          </li>
          <li>
            <Link to="/registerHr">Join as HR manager</Link>
          </li>
        </div>
      )}

      {user ? (
        <li>
          <Link onClick={handleLogOut} to="/login">
            Logout
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}

      {user ? (
        <div>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </div>
      ) : (
        ""
      )}
    </>
  );

  const NavOptionsForUser = (
    <>
      <li>
        <Link to="/employee/home">Home</Link>
      </li>
      <li>
        <Link to="/employee/myAsset">My asset</Link>
      </li>
      <li>
        <Link to="/employee/myTeam">My team</Link>
      </li>
      <li>
        <Link to="/employee/request">Request for an asset</Link>
      </li>
      {/* <li>
        <Link to="/employee/profile">Profile</Link>
      </li> */}
    </>
  );

  const NavOptionsForHr = (
    <>
      <li>
        <Link to="/hr/home">Home</Link>
      </li>
      <li>
        <Link to="/hr/list">Asset List</Link>
      </li>
      <li>
        <Link to="/hr/addAsset">Add an asset</Link>
      </li>
      <li>
        <Link to="/hr/allRequest">All requests</Link>
      </li>
      <li>
        <Link to="/hr/employeeList">My employee list</Link>
      </li>
      <li>
        <Link to="/hr/addEmployee">Add an employee</Link>
      </li>
      {/* <li><Link to='/hr/profile'>Profile</Link></li> */}
    </>
  );

  return (
    <>
      <div className="navbar z-10  bg-[#6292a6] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logoForUser} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavOptions}</ul>
        </div>

        {/* Make Conditional later */}
        <div className="mr-10 z-50">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                {user && role === "employee" ? (
                  <details>
                    <summary>Employee Routes</summary>
                    <ul className="p-2  bg-[#6292a6] rounded-t-none">
                      {NavOptionsForUser}
                    </ul>
                  </details>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex-none z-30">
            <ul className="menu menu-horizontal px-1">
              <li>
                {user && role === "admin" ? (
                  <details>
                    <summary>HR Routes</summary>
                    <ul className="p-2  bg-[#6292a6] rounded-t-none">
                      {NavOptionsForHr}
                    </ul>
                  </details>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="w-10 rounded-full"
            alt="Image"
            src="https://i.ibb.co/ygVzCDL/128-1280406-view-user-icon-png-user-circle-icon-png.png"
          />

          <li>{user?.displayName}</li>
        </div>
      </div>
    </>
  );
};

export default NavBar;
