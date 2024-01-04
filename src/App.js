import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
import Footer from './Components/Footer';
import Chat from './Components/Chat';
import PageInvoice from './Components/PageInvoice';
import Calendar from './Components/Calendar';
import EmailInbox from './Components/EmailInbox';
import Form from './Components/Form';

function App() {
  return (
    <Router>
      <div id='layout-wrapper'>
      <Navbar />
      <LeftSideBar />
      <Routes>
        <Route path="/" element={<Navigate to="/index" />} />
        <Route exact path="/index" element={<Index/>} />
        <Route exact path="/calendar" element={<Calendar/>} />
        <Route exact path="/chat" element={<Chat/>} />
        <Route exact path="/email-inbox" element={<EmailInbox/>} />
        <Route exact path="/pages-invoice" element={<PageInvoice/>} />
        <Route exact path="/form-elements" element={<Form/>} />
      </Routes>
      <Footer />
      <RightSideBar />
      <div class="rightbar-overlay"></div>
      </div>
    </Router>
  );
}

export default App;
