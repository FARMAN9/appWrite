import { useState } from "react";
import "./App.css";

function App() {
  //console.log(process.env.REACT_APP_APPWRITE_URL); //simple react
  console.log("Appwrite URL:", import.meta.env.VITE_APP_APPWRITE_URL);
  console.log("Project ID:", import.meta.env.VITE_APPWRITE_PROJECT_ID);
  console.log("Database ID:", import.meta.env.VITE_APPWRITE_DATABASE_ID);
  console.log("Collection ID:", import.meta.env.VITE_APPWRITE_COLLECTION_ID);
  console.log("Bucket ID:", import.meta.env.VITE_APPWRITE_BUCKET_ID);
  const [count, setCount] = useState(0);

  return <></>;
}

export default App;
