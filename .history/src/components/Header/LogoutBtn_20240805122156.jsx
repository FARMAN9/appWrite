import React from "react";
import { useDispatch } from "react-redux";
import authservices from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    authservices.logout().then(() => {
      console.log("Logged out successfully");
      dispatch(logout());
    });
  };
  return <button className=" inline-block px-">Logout</button>;
};

export default LogoutBtn;
