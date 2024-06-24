import { InstanceHistory } from "./InstanceHistory"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AiOutlineFilePdf } from "react-icons/ai";
import {showAlert} from '../../AlertLoader/index'
export const OneHistory=({featureName,getMoreData,historyData,downloadFile})=>{
    return(
        <div className="bg-gray-200 w-[80%] rounded-md flex flex-col items-start mt-2 shadow-md">
        <div className={`bg-gray-300  w-full h-[50px] relative items-center justify-between flex shadow-lg`}>
            <div className="absolute left-[10%]">
                Name
            </div>
            <div className="absolute left-[60%]">
                Date
            </div>  
        </div>
        <div  className="flex-wrap flex-col w-full">
            {historyData.map((value)=>(<InstanceHistory key={value.id} featureName={featureName} instanceHistoryData={value} downloadFile={downloadFile}/>))}
            <div className="bg-[white] hover:bg-gray-100 font-bold border-b h-10 w-full flex items-center justify-center cursor-pointer " onClick={getMoreData}>
                ...
            </div>
           </div>
    </div>
    )
}