import React from 'react';
import './App.css';
import ContentProfile from './components/Content/Profile/ContentProfile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Content/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs/>}/>
          <Route path='/ContentProfile' element={<ContentProfile/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
  );
};

export default App;
