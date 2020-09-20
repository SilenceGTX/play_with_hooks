import React from 'react';
import './App.css';
import UpAndDown from "./components/UpAndDown";
import AddOn from "./components/AddOn";
import Battleship from "./components/Battleship";
import Students from "./components/Context/Students";

function App() {
  return (
    <>
      <div className="App">
        <UpAndDown/>
      </div>
      <div className="App">
        <AddOn/>
      </div>
      <div className="App">
        <Battleship/>
      </div>
      <div className="App">
        <Students/>
      </div>

    </>
  );
}

export default App;
