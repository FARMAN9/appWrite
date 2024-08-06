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
          console.log("User logged in successfully", userData);
        } else {
          dispatch(logout());
          console.log("User logged out successfully");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !Loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className=" w-full block ">
        <Header />
        <h1>FARMAN</h1>
        <main>{/* Your App Content */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
