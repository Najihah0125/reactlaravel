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
        {/* <Route exact path="/" element={<DisplayPurchase/>} /> */}
        <Route exact path="/auth-lock-screen" element={<DisplayPurchase/>} />
        <Route exact path="/auth-login" element={<DisplayPurchase/>} />
        <Route exact path="/auth-recoverpw" element={<DisplayPurchase/>} />
        <Route exact path="/auth-register" element={<DisplayPurchase/>} />
        <Route exact path="/calendar" element={<DisplayPurchase/>} />
        <Route exact path="/charts-apex" element={<DisplayPurchase/>} />
        <Route exact path="/chat" element={<DisplayPurchase/>} />
        <Route exact path="/charts-chartist" element={<DisplayPurchase/>} />
        <Route exact path="/charts-chartjs" element={<DisplayPurchase/>} />
        <Route exact path="/auth-recoverpw" element={<DisplayPurchase/>} />
        <Route exact path="/auth-register" element={<DisplayPurchase/>} />
        <Route exact path="/calendar" element={<DisplayPurchase/>} />
        <Route exact path="/charts-apex" element={<DisplayPurchase/>} />
        <Route exact path="/chat" element={<DisplayPurchase/>} />
        <Route exact path="/auth-lock-screen" element={<DisplayPurchase/>} />
        <Route exact path="/auth-login" element={<DisplayPurchase/>} />
        <Route exact path="/auth-recoverpw" element={<DisplayPurchase/>} />
        <Route exact path="/auth-register" element={<DisplayPurchase/>} />
        <Route exact path="/calendar" element={<DisplayPurchase/>} />
        <Route exact path="/charts-apex" element={<DisplayPurchase/>} />
        <Route exact path="/chat" element={<DisplayPurchase/>} />
        <Route exact path="/auth-lock-screen" element={<DisplayPurchase/>} />
        <Route exact path="/auth-login" element={<DisplayPurchase/>} />
        <Route exact path="/auth-recoverpw" element={<DisplayPurchase/>} />
        <Route exact path="/auth-register" element={<DisplayPurchase/>} />
        <Route exact path="/calendar" element={<DisplayPurchase/>} />
        <Route exact path="/charts-apex" element={<DisplayPurchase/>} />
        <Route exact path="/chat" element={<DisplayPurchase/>} />
        <Route exact path="/auth-lock-screen" element={<DisplayPurchase/>} />
        <Route exact path="/auth-login" element={<DisplayPurchase/>} />
        <Route exact path="/auth-recoverpw" element={<DisplayPurchase/>} />
        <Route exact path="/auth-register" element={<DisplayPurchase/>} />
        <Route exact path="/calendar" element={<DisplayPurchase/>} />
        <Route exact path="/charts-apex" element={<DisplayPurchase/>} />
        <Route exact path="/chat" element={<DisplayPurchase/>} />
        <Route exact path="/auth-lock-screen" element={<DisplayPurchase/>} />
        <Route exact path="/auth-login" element={<DisplayPurchase/>} />
        <Route exact path="/auth-recoverpw" element={<DisplayPurchase/>} />
        <Route exact path="/auth-register" element={<DisplayPurchase/>} />
        <Route exact path="/calendar" element={<DisplayPurchase/>} />
        <Route exact path="/charts-apex" element={<DisplayPurchase/>} />
        <Route exact path="/chat" element={<DisplayPurchase/>} />
        <Route exact path="/auth-lock-screen" element={<DisplayPurchase/>} />
        <Route exact path="/auth-login" element={<DisplayPurchase/>} />
        <Route exact path="/auth-recoverpw" element={<DisplayPurchase/>} />
        <Route exact path="/auth-register" element={<DisplayPurchase/>} />
        <Route exact path="/calendar" element={<DisplayPurchase/>} />
        <Route exact path="/charts-apex" element={<DisplayPurchase/>} />
        <Route exact path="/chat" element={<DisplayPurchase/>} />
        <Route exact path="/auth-lock-screen" element={<DisplayPurchase/>} />
        <Route exact path="/auth-login" element={<DisplayPurchase/>} />
        <Route exact path="/auth-recoverpw" element={<DisplayPurchase/>} />
        <Route exact path="/auth-register" element={<DisplayPurchase/>} />
        <Route exact path="/calendar" element={<DisplayPurchase/>} />
        <Route exact path="/charts-apex" element={<DisplayPurchase/>} />
        <Route exact path="/chat" element={<DisplayPurchase/>} />
      </Routes>
    </Router>
  );
}

export default App;
