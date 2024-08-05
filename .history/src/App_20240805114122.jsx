import { useState } from "react";
import "./App.css";
import conf from "./conf/conf";
import { Header, Footer } from "./components";
import { useDispatch } from "react-redux";

function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
    </>
  );
}

export default App;
