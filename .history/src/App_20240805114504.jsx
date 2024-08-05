import { useEffect, useState } from "react";
import "./App.css";
import conf from "./conf/conf";
import { Header, Footer } from "./components";
import { useDispatch } from "react-redux";
import authservices from "./appwrite/auth";

function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authservices
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
        }
        dispatch({ type: "SET_USER", payload: userData });
        setLoading(false);
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
