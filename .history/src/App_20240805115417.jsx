import { useEffect, useState } from "react";
import "./App.css";
import conf from "./conf/conf";
import { Header, Footer } from "./components";
import { useDispatch } from "react-redux";
import authservices from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authservices
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !Loading ?(<div className="">test</div>) <p>Loading...</p>;
}

export default App;
