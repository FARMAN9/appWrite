import React from "react";
import { useDispatch } from "react-redux";
import authservices from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    
  }
  return <div>LogoutBtn</div>;
};

export default LogoutBtn;
