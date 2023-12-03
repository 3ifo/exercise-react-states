import { useState } from "react";
import Navbar from "./components/Navbar";
import Bodyy from "./components/Bodyy";

import "./App.css";
import "./Index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Bodyy />
    </>
  );
}

export default App;
