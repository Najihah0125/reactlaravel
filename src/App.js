import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DisplayPurchase from './pages/DisplayPurchase';
import CreatePurchase from './pages/CreatePurchase';

function App() {
  return (
    <Router>
      <Routes>
        {/* route of the web page */}
        <Route exact path="/" element={<DisplayPurchase/>} />
        <Route exact path="/PRform" element={<CreatePurchase/>} />

        

        
      </Routes>
    </Router>
  );
}

export default App;
