import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import React from 'react';
import Home from './Home';
import AddAShow from './AddAShow';
import WatchAShow from './WatchAShow';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <h1>Randomize Series Episode</h1>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="AddAShow" element={<AddAShow />}/>
            <Route path="WatchAShow" element={<WatchAShow />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;