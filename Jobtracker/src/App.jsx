import { useState } from 'react'
import './App.css'
import Nav from "./component/navbar";
import Side from "./component/sidebar";
import Dash from "./pages/Dashboard";

function App() {
  return (
    <div className="app-layout">
      <Side />
      <div className="main-area">
        <Nav />
        <main className="page-content">
          <Dash />
        </main>
      </div>
    </div>
  );
}

export default App;
