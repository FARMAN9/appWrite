import { useState } from "react";
import "./App.css";
import conf from "./conf/conf";
import { Header, Footer } from "./components";

function App() {
  const [Load, setCount] = useState(0);

  return <>{conf.APPWRITE_BUCKET_ID}</>;
}

export default App;