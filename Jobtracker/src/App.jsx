import { useState } from 'react'
import './App.css'
import Nav from "./component/navbar";
import Side from "./component/sidebar";

function App() {
  return (
    <div className="app-layout">
      <Side />
      <div className="main-area">
        <Nav />
      </div>
    </div>
  );
}

export default App;
