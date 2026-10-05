import { useState } from 'react'
import './App.css'
import Nav from "./component/navbar";
import Side from "./component/sidebar";
import Dash from "./pages/Dashboard";
import Appli from './pages/Application';
import Interview from './pages/Interview';
import Anal from './pages/Analytics';
import Sett from './pages/Setting';

function App() {
  return (
    <div className="app-layout">
      <Side />
      <div className="main-area">
        <Nav />
        <main className="page-content">
          <Dash />
          <Appli />
          <Interview />
          <Anal />
          <Sett />
        </main>
      </div>
    </div>
  );
}

export default App;
