import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { VscThreeBars } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  const [sideOpen, setSideOpen] = useState(true);
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <div className="max-w-[1920px] mx-auto rale-way">
      <header className="bg-white shadow-lg  flex w-full z-50  px-5 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px]">
        {/* start */}
        <Link to="/" className="md:border-r flex flex-shrink-0 items-center">
          <div className=" w-[100px] flex justify-center ">
            <img
              className="md:w-[65px] py-1 w-[70px] h-[60px] object-cover"
              src={logo}
              alt="logo"
            />
          </div>
        </Link>
        {/* middle */}
        <nav className="header-links md:contents font-medium text-base  hidden ">
          <ul className="flex gap-8 items-center ml-4 xl:ml-8 mr-auto w-full justify-center dark:text-black">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF3811] text-bold border-b-4 border-[#FF3811]"
                    : "hover:text-[#FF3811]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink
                  to="/order-details"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF3811] text-bold border-b-4 border-[#FF3811]"
                      : "hover:text-[#FF3811]"
                  }
                >
                  <span>Booking Details</span>
                </NavLink>
              </li>
            )}

            {user ? (
              <li>
                <NavLink
                  onClick={handleLogOut}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF3811] border-b-4 border-[#FF3811]"
                      : "hover:text-[#FF3811]"
                  }
                >
                  <span>LogOut</span>
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF3811] border-b-4 border-[#FF3811]"
                      : "hover:text-[#FF3811]"
                  }
                >
                  <span>Login</span>
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        {/* end */}
        <div className="relative md:border-l flex items-center gap-5  justify-end w-full md:w-auto pl-5 ">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6516 3.34835C13.9484 2.64509 12.9945 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34833 3.34835C8.64507 4.05161 8.24998 5.00544 8.24998 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.24998C4.09219 21.7502 3.93613 21.7171 3.79193 21.6531C3.64774 21.589 3.51863 21.4953 3.41301 21.3781C3.30738 21.2608 3.2276 21.1227 3.17884 20.9726C3.13008 20.8226 3.11343 20.6639 3.12999 20.507L4.39399 8.507C4.42314 8.23056 4.55361 7.9747 4.76024 7.78876C4.96686 7.60281 5.23501 7.49995 5.51298 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.62498 10.5C8.62498 10.5995 8.58548 10.6948 8.51515 10.7652C8.44482 10.8355 8.34944 10.875 8.24998 10.875C8.15053 10.875 8.05515 10.8355 7.98482 10.7652C7.91449 10.6948 7.87498 10.5995 7.87498 10.5C7.87498 10.4005 7.91449 10.3052 7.98482 10.2348C8.05515 10.1645 8.15053 10.125 8.24998 10.125C8.34944 10.125 8.44482 10.1645 8.51515 10.2348C8.58548 10.3052 8.62498 10.4005 8.62498 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8494 10.875 15.75 10.875C15.6505 10.875 15.5551 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5551 10.1645 15.6505 10.125 15.75 10.125C15.8494 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z"
                stroke="#444444"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3964 3.78941 12.4887 2.99921 10.4995 2.99921C8.51029 2.99921 6.60256 3.78941 5.19599 5.19599C3.78941 6.60256 2.99921 8.51029 2.99921 10.4995C2.99921 12.4887 3.78941 14.3964 5.19599 15.803C6.60256 17.2096 8.51029 17.9998 10.4995 17.9998C12.4887 17.9998 14.3964 17.2096 15.803 15.803V15.803Z"
                stroke="#444444"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <button className=" border-[#FF3811] border-2 rounded-md hidden md:block duration-200 text-[#FF3811] font-bold px-4 xl:px-6 py-1 ">
            Appointment
          </button>

          {/* user Menu */}
          {/* <div
            className={`absolute text-center hidden
            } flex flex-col justify-center items-center gap-4  shadow-lg bg-white dark:bg-[#120505] px-8 py-4 top-16 dark:text-white z-50`}
          >
            <p className="text-lg font-semibold">{}</p>

            <button className="bg-[#FF3811] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer">
              logout
            </button>
          </div>
         */}
        </div>
        {/* Drawer */}
        <button
          onClick={() => setSideOpen(!sideOpen)}
          className="text-4xl text-[#FF3811] flex items-center md:hidden ml-3"
        >
          {sideOpen ? <VscThreeBars /> : <RxCross2 />}
        </button>
      </header>

      {/* Side Menu */}
      {/* transition-transform transform -translate-x-full */}
      <div
        className={`absolute ${
          sideOpen ? "hidden" : "block"
        }  bg-white shadow-lg md:hidden mt-14 w-56 min-h-screen overflow-y-auto top-0 -left-5 ease-in-out duration-30  dark:bg-white dark:text-white z-10`}
      >
        <div className="p-4">
          <ul className="mt-6 flex flex-col gap-4 ml-5">
            <li>
              <NavLink
                onClick={() => setSideOpen(!sideOpen)}
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF3811] border-b-4 border-[#FF3811]"
                    : "hover:text-[#FF3811]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSideOpen(!sideOpen)}
                to="/product/add"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF3811] border-b-4 border-[#FF3811]"
                    : "hover:text-[#FF3811]"
                }
              >
                <span>Add Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSideOpen(!sideOpen)}
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF3811] border-b-4 border-[#FF3811]"
                    : "hover:text-[#FF3811]"
                }
              >
                <span>My Cart</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="ml-8 mt-8">
          <div className={`flex flex-col gap-2 top-16 pr-5`}>
            <button className="border-2 mx-auto border-[#FF3811] rounded-full w-[40px]">
              <img src={""} alt="" className="w-full h-full rounded-full" />
            </button>
            <p className="text-lg font-semibold text-center"></p>
            <button className="bg-[#FF3811] hover:bg-[#ab3154] duration-200 text-white font-bold px-4  py-1 rounded ">
              logout
            </button>
          </div>

          <button className="bg-[#FF3811] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
