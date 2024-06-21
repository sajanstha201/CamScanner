
import { InstanceHistory } from "./InstanceHistory"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AiOutlineFilePdf } from "react-icons/ai";
import {showAlert} from '../../AlertLoader/index'
import { OneHistory } from "./OneHistory";
import { icon } from "@fortawesome/fontawesome-svg-core";
export const PdfConversionHistory=()=>{
    const baseUrl=useSelector((state)=>state.baseUrl).backend
    const userInfo=useSelector((state)=>state.userProfile)
    const historyDict=['sajan','shrerstha','country','nepal','city','kathmandu']
    const [historyData,setHistoryData]=useState([])
    const [nextUrl,setNextUrl]=useState(baseUrl + 'api/scanned-files/')
    const getMoreData=async()=>{
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
        getMoreData();
        setTimeout(()=>{console.log(historyData)},10000)
    },[])
    const showData=()=>{
        console.log(historyData)
    }
    const h=['sajan','shrestha','alfdjl']
    return(
        <div className="w-full flex justify-center">
            <OneHistory getMoreData={getMoreData} historyData={h} icon={<AiOutlineFilePdf/>}/>
        </div>
    )
}