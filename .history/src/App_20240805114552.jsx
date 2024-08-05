import { useEffect, useState } from "react";
import "./App.css";
import conf from "./conf/conf";
import { Header, Footer } from "./components";
import { useDispatch } from "react-redux";
import authservices from "./appwrite/auth";
import {l}
function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authservices
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        }
      })
      .finally();
  });

  return (
    <>
      <Header />
    </>
  );
}

export default App;
