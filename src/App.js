import './App.css';
import {Navbar,UserNavbar,MobileNavbar} from './components/Navbars'
import {Route,Routes, useLocation,Navigate} from 'react-router-dom'
import {Login,Register} from './webpage/Login-Register'
import { PdfConversion, TableExtraction } from './components/Features';
import {Home} from './webpage'
import { useState } from 'react';
import DocumentAnalysis from './components/Features/DocumentAnalysis';
import { DisplayExcel, DisplayPdf } from './components/ShowResult';
import { useMediaQuery } from 'react-responsive';
import {BlankPage,NoPageFound} from './webpage/BlankPage'
import { ContactUs,AboutUs } from './webpage';
import { Profile ,History} from './components/User';
import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer'
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { showAlert } from './components/AlertLoader';
function App() {
  const [token,setToken]=useState()
  const location=useLocation()
  const showResult=location.pathname.startsWith('/display')
  const blankPageActivate=location.pathname.startsWith('/blank')
  const isMobile=useMediaQuery({query:'(max-width: 767px)'})
  const userInfo=useSelector((state)=>state.userProfile)
  return (
    <div className="App">
      <div id="alert-container"></div>
      <div className='blur-box' id='blur-box'>
            <div className='loader-box' id='loader-box'></div>      
      </div>
        <div className='whole-body-outer'>
          <div className='whole-body-inner'>
          {(!showResult&&!blankPageActivate)&&<Navbar></Navbar>}
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/pdf-conversion' element={<PdfConversion/>}/>
                {userInfo.isLogin&&<>
                  <Route path='/table-extraction' element={<TableExtraction/>}/>
                  <Route path='/document-analysis' element={<DocumentAnalysis/>}/>
                </>
                }
                <Route path='/display-pdf' element={<DisplayPdf/>}/>
                <Route path='/display-excel' element={<DisplayExcel/>}/>
                <Route path='/blank' element={<BlankPage/>}/>
                <Route path='/contact-us' element={<ContactUs/>}/>
                <Route path='/about-us' element={<AboutUs/>}/>
                <Route path='/user/profile' element={<Profile/>}/>
                <Route path='/user/history' element={<History/>}/>
                <Route path="*" element={<NoPageFound/>} />
          </Routes>
          </div>
          {(!showResult&&!blankPageActivate)&&<Footer/>}
        </div>


    </div>
  );
}

export default App;
