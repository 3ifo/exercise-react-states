import { useState } from "react";
const Navbar = () => {
  const [nightMode, setNightMode] = useState(false);

  const tryStates = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className={`navbar ${nightMode ? "night-mode" : "day-mode"}`}>
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li>Food</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div id="bottoni">
        <button onClick={tryStates}>Light Mode</button>
        <button onClick={tryStates}>Night mode</button>
      </div>
    </div>
  );
};
export default Navbar;
