
import { InstanceHistory } from "./InstanceHistory"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import { OneDayHistory } from "./OneDayHistory";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
            const response = await axios.get(nextUrl,{
                headers: { 'Authorization': 'Token '+localStorage.getItem('token') }
            });
            console.log(response.data)
            setNextUrl(response.data.next)
            setHistoryData(prevData=>[...prevData,...response.data.results])
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getData();
        setTimeout(()=>{console.log(historyData)},10000)
    },[dropDown])
    const h=['sajan','shrestha','alfdjl']
    return(
        <div className="bg-gray-200 w-full rounded-md flex flex-col items-start m-1 mb-3 shadow-sm">
            <div className={`bg-gray-400 w-full lg:h-[50px]  items-center justify-between flex shadow-md ${dropDown?'rounded-t-md':'rounded-md '}`} onClick={()=>{setDropDown(!dropDown)}}>
                <div className="pl-2">
                    Pdf Conversion
                </div>
                <div  className="pr-2">
                    <FontAwesomeIcon icon={dropDown?faChevronUp:faChevronDown}/>
               </div>
            </div>
            <div style={{display:dropDown?'flex':'none'}} className="flex-wrap ">
                {h.map((value,index)=>(<InstanceHistory instanceHistoryData={value}/>))}
               </div>
        </div>
    )
}