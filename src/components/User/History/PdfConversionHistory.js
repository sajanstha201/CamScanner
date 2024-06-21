
import { InstanceHistory } from "./InstanceHistory"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AiOutlineFilePdf } from "react-icons/ai";
import {showAlert} from '../../AlertLoader/index'
export const PdfConversionHistory=()=>{
    const location=useLocation()
    const baseUrl=useSelector((state)=>state.baseUrl).backend
    const userInfo=useSelector((state)=>state.userProfile)
    const [dropDown,setDropDown]=useState(true)
    const historyDict=['sajan','shrerstha','country','nepal','city','kathmandu']
    const [historyData,setHistoryData]=useState([])
    const [nextUrl,setNextUrl]=useState(baseUrl + 'api/scanned-files/')
    const getData=async()=>{
        try{
            if(nextUrl===null){
                showAlert('No More History','red')
            }
            else{
                const response = await axios.get(nextUrl,{
                    headers: { 'Authorization': 'Token '+localStorage.getItem('token') }
                });
                console.log(response.data)
                setNextUrl(response.data.next)
                setHistoryData(prevData=>[...prevData,...response.data.results])
            }
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getData();
        setTimeout(()=>{console.log(historyData)},10000)
    },[dropDown])
    const showData=()=>{
        console.log(historyData)
    }
    const h=['sajan','shrestha','alfdjl']
    return(
        <div className="bg-gray-200 w-full rounded-md flex flex-col items-start  mb-3 shadow-md">
            <div className={`bg-blue-100 w-full lg:h-[50px]  items-center justify-between flex shadow-lg ${dropDown?'rounded-t-md':'rounded-md '}`} onClick={()=>{setDropDown(!dropDown)}}>
                <div className="pl-2 font-bold">
                    Pdf Conversion
                </div>
                <div  className="pr-2">
                    <FontAwesomeIcon icon={dropDown?faChevronUp:faChevronDown}/>
               </div>
            </div>
            <div style={{display:dropDown?'flex':'none'}} className="flex-wrap flex-col w-full">
                {h.map((value,index)=>(<InstanceHistory instanceHistoryData={value} icon={<AiOutlineFilePdf/>}/>))}
                <div className="bg-[white] hover:bg-gray-100 font-bold border-b mt-1 h-10 w-full flex items-center justify-center cursor-pointer " onClick={showData}>
                    ...
                </div>
               </div>
        </div>
    )
}