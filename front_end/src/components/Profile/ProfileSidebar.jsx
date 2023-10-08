import React from "react";
import { AiOutlineLogin, AiOutlineMessage, AiOutlineQuestionCircle } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import  "../../styles/ProfileSideBar.css"

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
 const {user} = useSelector((state) => state.user);
 
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
     
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8" style={{height:"100vh",display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      
      <div >
        <div className="logo">Medc</div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "rgb(37,94,214)" : ""}  />
        <span style={active===1 ?{fontWeight:900}:{}}
          className={`pl-3 ${
            active === 1 ? "text-[rgb(37,94,214)]" : ""
          } 800px:block hidden`}
        >
          Profile
        </span>
      </div>
      {/* <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "rgb(37,94,214)" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[rgb(37,94,214)]" : ""
          } 800px:block hidden`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "rgb(37,94,214)" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[rgb(37,94,214)]" : ""
          } 800px:block hidden`}
        >
          Refunds
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "rgb(37,94,214)" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[rgb(37,94,214)]" : ""
          } 800px:block hidden`}
        >
          Inbox
        </span>
      </div> */}

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "rgb(37,94,214)" : ""} />
          <span style={active === 5 ? { fontWeight: 900 } : {}}
          className={`pl-3 ${
            active === 5 ? "text-[rgb(37,94,214)]" : ""
          } 800px:block hidden`}
        >
          Track Presciption
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "rgb(37,94,214)" : ""} />
        <span style={active===6 ?{fontWeight:900}:{}}
          className={`pl-3 ${
            active === 6 ? "text-[rgb(37,94,214)]" : ""
          } 800px:block hidden`}
        >
          Change Password
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "rgb(37,94,214)" : ""} />
          <span style={active === 7 ? { fontWeight: 900 } : {}}
          className={`pl-3 ${
            active === 7 ? "text-[rgb(37,94,214)]" : ""
          } 800px:block hidden`}
        >
          Address
        </span>
      </div>
      
      
      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 7 ? "rgb(37,94,214)" : ""}
            />
              <span style={active === 8 ? { fontWeight: 900 } : {}}
              className={`pl-3 ${
                active === 8 ? "text-[rgb(37,94,214)]" : ""
              } 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}

    </div>

    <div>
      <div
        className="single_item flex items-center cursor-pointer w-full mb-8"
          onClick={() => setActive(9)}
      >
        <AiOutlineQuestionCircle size={20} color={active === 9 ? "rgb(37,94,214)" : ""} />
          <span style={active === 9 ? { fontWeight: 900 } : {}}
          className={`pl-3 ${active === 9 ? "text-[rgb(37,94,214)]" : ""
            } 800px:block hidden`}
        >
          Help
        </span>
      </div>
      <div
        className="single_item flex items-center cursor-pointer w-full mb-8"
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={20} color={active === 10 ? "rgb(37,94,214)" : ""} />
          <span style={active === 10 ? { fontWeight: 900 } : {}}
          className={`pl-3 ${
            active === 10 ? "text-[rgb(37,94,214)]" : ""
          } 800px:block hidden`}
        >
          Log out
        </span>
      </div>
      </div>
    </div>

  );
};

export default ProfileSidebar;
