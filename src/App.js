import './App.css';
import {Navbar,UserNavbar,MobileNavbar} from './components/Navbars'
import {Route,Routes, useLocation,Navigate} from 'react-router-dom'
import {Login,Register,Logout} from './webpage/Login-Register'
import { PdfConversion, TableExtraction } from './components/Features';
import {FAQ, Home,AboutUs,ContactUs, Feature} from './webpage'
import { useEffect, useState } from 'react';
import DocumentAnalysis from './components/Features/DocumentAnalysis';
import { DisplayExcel, DisplayPdf } from './components/ShowResult';
import { useMediaQuery } from 'react-responsive';
import {BlankPage,NoPageFound} from './webpage/BlankPage'
import { Profile ,Notification,Setting, HistoryPage} from './components/User';
import { Support } from './components/User/Support';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer/Footer'
import { setIsLogin, setToken } from './state/UserInformation/ProfileSlice'
function App() {
  const location=useLocation()
  const showResult=location.pathname.startsWith('/display')
  const blankPageActivate=location.pathname.startsWith('/blank')
  const isMobile=useMediaQuery({query:'(max-width: 767px)'})
  const userInfo=useSelector((state)=>state.userProfile)
  const dispatch=useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch(setToken(localStorage.getItem('token')))
      dispatch(setIsLogin(true))
    }
  },[])
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
                <Route path='/about-us' element={<AboutUs/>}/>
                <Route path='/contact-us' element={<ContactUs/>}/>
                <Route path='/faq' element={<FAQ/>}/>
                <Route path='/feature' element={<Feature/>}/>

                <Route path='/user/profile' element={<Profile/>}/>
                <Route path='/user/history' element={<HistoryPage/>}/>
                <Route path="*" element={<NoPageFound/>} />
                <Route path='/user/notification' element={<Notification/>}/>
                <Route path='/user/Setting' element={<Setting/>}/>
                <Route path='/user/Support' element={<Support/>}/>
                <Route path='/user/logout' element={<Logout/>}/>
          </Routes>
          </div>
          {(!showResult&&!blankPageActivate)&&<Footer/>}
        </div>


    </div>
  );
}

export default App;
