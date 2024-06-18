import { Link } from "react-router-dom";

const NavBar = () => {
  const NavOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/registerEmp">Join as employee</Link>
      </li>
      <li>
        <Link to="/registerHr">Join as HR manager</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>

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
        <li><Link to='/hr/home'>Home</Link></li>
        <li><Link to='/hr/list'>Asset List</Link></li>
        <li><Link to='/hr/addAsset'>Add an asset</Link></li>
        <li><Link to='/hr/allRequest'>All requests</Link></li>
        <li><Link to='/hr/employeeList'>My employee list</Link></li>
        <li><Link to='/hr/addEmployee'>Add an employee</Link></li>
        {/* <li><Link to='/hr/profile'>Profile</Link></li> */}
      </>
    );

  return (
    <>
      <div className="max-w-7xl navbar z-10  bg-[#6292a6] text-white">
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
            <img src="https://i.ibb.co/5FYfLgw/Logo.png" alt="Logo" />
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
                <details>
                  <summary>For General User</summary>
                  <ul className="p-2  bg-[#6292a6] rounded-t-none">
                    {NavOptionsForUser}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex-none z-30">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>For HR Only</summary>
                  <ul className="p-2  bg-[#6292a6] rounded-t-none">
                    {NavOptionsForHr}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
{/* Make Conditional later */}


        <div className="navbar-end">
          <a className="btn bg-white px-10">Login</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
