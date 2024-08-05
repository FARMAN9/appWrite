import React from "react";
import { useDispatch } from "react-redux";
import authservices from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await authservices.logout();
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  }
  return <div>LogoutBtn</div>;
};

export default LogoutBtn;
