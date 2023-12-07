import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Purchase from './pages/Purchase';

function App() {
  return (
    <Router>
      <Routes>
        {/* route of the web page */}
        <Route exact path="/" element={<Purchase/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
