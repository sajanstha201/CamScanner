import './App.css';
import Navbar from './components/Navbars/Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import {Login,Register} from './components/Login-Register'
import { PdfConversion, TableExtraction } from './components/Features';
import Home from './components/Home'
import { useState } from 'react';
import UserNavbar from './components/Navbars/UserNavbar';
import DocumentAnalysis from './components/Features/DocumentAnalysis';
function App() {
  const [token,setToken]=useState()
  return (
    <div className="App">
      <div className='blur-box' id='blur-box'>
            <div className='loader-box' id='loader-box'></div>      
      </div>
      <div id="alert-container"></div>
      <Router>
        <div className='whole-body-outer'>
          <div className='whole-body-inner'>
            <Navbar></Navbar>
              <Routes>
                <Route path='' element={<Home token={token}/>}></Route>
                <Route path='/login' element={<Login setToken={setToken}/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/table-extraction' element={<TableExtraction></TableExtraction>}></Route>
                <Route path='/pdf-conversion' element={<PdfConversion></PdfConversion>}></Route>
                <Route path='/document-analysis' element={<DocumentAnalysis></DocumentAnalysis>}></Route>
              </Routes>
          </div>
          <div className='side-navbar'>
            <UserNavbar></UserNavbar>
          </div>
        </div>

      </Router> 
    </div>
  );
}

export default App;
