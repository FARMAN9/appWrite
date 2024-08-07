import React from "react";
import { useDispatch } from "react-redux";
import authservices from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    authservices.logout().then(()=>{
      console.log('Logged out successfully');
      dispatch(logout)
    })
    dispatch(logout());
  };
  return <div>LogoutBtn</div>;
};

export default LogoutBtn;
