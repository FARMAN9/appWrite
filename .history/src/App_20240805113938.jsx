import { useState } from "react";
import "./App.css";
import conf from "./conf/conf";
import {}

function App() {
  const [count, setCount] = useState(0);

  return <>{conf.APPWRITE_BUCKET_ID}</>;
}

export default App;
