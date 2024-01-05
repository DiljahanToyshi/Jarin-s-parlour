import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiUserList, PiSquaresFourLight } from "react-icons/pi";
import { AiOutlinePlus, AiOutlineUserAdd } from "react-icons/ai";
import { BsChatLeftDots } from "react-icons/bs";
import { TbShoppingBag } from "react-icons/tb";
import logo from "../../../../assets/logo.png";

import { FiShoppingCart } from "react-icons/fi";
import useAdmin from "../../Components/hooks/useAdmin";
import Loader from "../../Components/Loader/Loader";

const Dashboard = () => {
  // TODO: load data from the server to have dynamic isAdmin based on Data
  const [isAdmin,isAdminLoading] = useAdmin();
  if(isAdminLoading){
    return <Loader/>;
  }
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-gray-100">
        <label
          htmlFor="my-drawer-2"
          className="sm:py-4 btn text-white bg-[#F63E7B] font-semibold px-4 drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content bg-rose-50">
    
        <li><Link to="/" className="inline-flex ">
          <img src={logo} className="h-12" alt="logo" />
        </Link></li>
          {isAdmin && !isAdminLoading ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 font-semibold"
                      : "default font-medium"
                  }
                  to="/dashboard/orderList"
                >
                  <PiUserList></PiUserList> Customer List
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 font-semibold"
                      : "default font-medium"
                  }
                  to="/dashboard/addService"
                >
                  {" "}
                  <AiOutlinePlus></AiOutlinePlus> Add Service{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 font-semibold"
                      : "default font-medium"
                  }
                  to="/dashboard/makeAdmin"
                >
                  <AiOutlineUserAdd></AiOutlineUserAdd> Make Admin
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 font-semibold"
                      : "default font-medium"
                  }
                  to="/dashboard/manageService"
                >
                  <PiSquaresFourLight></PiSquaresFourLight> Manage Services
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 font-semibold"
                      : "default font-medium"
                  }
                  to="/dashboard/book"
                >
                  <FiShoppingCart></FiShoppingCart> Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 font-semibold"
                      : "default font-medium"
                  }
                  to="/dashboard/bookinkgList"
                >
                  <TbShoppingBag></TbShoppingBag> Booking List
                </NavLink>
              </li>
             
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 font-semibold"
                      : "default font-medium"
                  }
                  to="/dashboard/review"
                >
                  <BsChatLeftDots></BsChatLeftDots> Review
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
              to="/"
            >
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Our Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
