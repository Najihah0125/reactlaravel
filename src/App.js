import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import LeftSideBar from './Components/LeftSideBar';
import Footer from './Components/Footer';
import Chat from './Components/Chat';

function App() {
  return (
    <Router>
      <Navbar />
      <LeftSideBar />
      <Footer />
      <Routes>
        <Route exact path="/index" element={<Index/>} />
        <Route exact path="/" element={<Index/>} />
        <Route exact path="/chat" element={<Chat/>} />
      </Routes>
    </Router>
  );
}

export default App;
