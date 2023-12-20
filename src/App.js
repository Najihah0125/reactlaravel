import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DisplayPurchase from './Components/DisplayPurchase';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import LeftSideBar from './Components/LeftSideBar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <LeftSideBar />
      <Content />
      <Footer />
      <Routes>
        {/* route of the web page */}
        <Route exact path="/" element={<DisplayPurchase/>} />
      </Routes>
    </Router>
  );
}

export default App;
