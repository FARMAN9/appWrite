import { useState } from "react";
import "./App.css";

function App() {
  //console.log(process.env.REACT_APP_APPWRITE_URL); //simple react
  console.log("",import.meta.env.VITE_APP_APPWRITE_URL); //vite
  const [count, setCount] = useState(0);

  return <></>;
}

export default App;
