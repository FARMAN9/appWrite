import React from "react";
import { useDispatch } from "react-redux";
import authservices from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  useDispatch;
  const dispatch = useDispatch();
  return <div>LogoutBtn</div>;
};

export default LogoutBtn;
