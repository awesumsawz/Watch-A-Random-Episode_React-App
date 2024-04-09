import Navbar from './Navbar'
import React from 'react';
import Home from './Home';
import AddAShow from './AddAShow';
import WatchAShow from './WatchAShow';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Randomize Series Episode</h1>
        {/* <Home /> */}
        {/* <AddAShow /> */}
        <WatchAShow />
      </div>
    </div>
  );
}

export default App;