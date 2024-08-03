import { useState } from "react";
import "./App.css";
import conf from "./conf/conf";

function App() {
  const [count, setCount] = useState(0);

  return <>{conf}</>;
}

export default App;
