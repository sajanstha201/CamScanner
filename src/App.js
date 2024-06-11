import './App.css';
import {Navbar,UserNavbar,MobileNavbar} from './components/Navbars'
import { BrowserRouter as Router,Route,Routes, useLocation } from 'react-router-dom'
import {Login,Register} from './components/Login-Register'
import { PdfConversion, TableExtraction } from './components/Features';
import Home from './components/Home'
import { useState } from 'react';
import DocumentAnalysis from './components/Features/DocumentAnalysis';
import { DisplayExcel, DisplayPdf } from './components/ShowResult';
import { useMediaQuery } from 'react-responsive';
import {BlankPage} from './components/BlankPage/BlankPage'
function App() {
  const [token,setToken]=useState()
  const location=useLocation()
  const showResult=location.pathname.startsWith('/display')
  const blankPageActivate=location.pathname.startsWith('/blank')
  const isMobile=useMediaQuery({query:'(max-width: 767px)'})
  console.log(blankPageActivate)
  return (
    <div className="App">
      <div className='blur-box' id='blur-box'>
            <div className='loader-box' id='loader-box'></div>      
      </div>
      <div id="alert-container"></div>
        <div className='whole-body-outer'>
          <div className='whole-body-inner'>
          {(!showResult&&!blankPageActivate)&&<Navbar></Navbar>}
              <Routes>
                <Route path='' element={<Home token={token}/>}></Route>
                <Route path='/login' element={<Login setToken={setToken}/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/table-extraction' element={<TableExtraction></TableExtraction>}></Route>
                <Route path='/pdf-conversion' element={<PdfConversion></PdfConversion>}></Route>
                <Route path='/document-analysis' element={<DocumentAnalysis></DocumentAnalysis>}></Route>
                <Route path='/display-pdf' element={<DisplayPdf></DisplayPdf>}></Route>
                <Route path='/display-excel' element={<DisplayExcel></DisplayExcel>}></Route>
                <Route path='/blank' element={<BlankPage></BlankPage>}></Route>
              </Routes>
          </div>
          <div className='side-navbar'>
            <UserNavbar></UserNavbar>
          </div>
        </div>


    </div>
  );
}

export default App;
