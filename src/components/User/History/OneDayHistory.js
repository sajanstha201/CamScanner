import { InstanceHistory } from "./InstanceHistory"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
export const OneDayHistory=({OneDayData})=>{
    const [dropDown,setDropDown]=useState(false)
    return(
        <div className="bg-gray-100 rounded-md flex flex-col items-start m-1 mb-3 shadow-sm">
            <div className={`bg-gray-200 w-full lg:h-[40px]  items-center justify-between flex shadow-sm ${dropDown?'rounded-t-md':'rounded-md '}`} onClick={()=>{setDropDown(!dropDown)}}>
                <div className="pl-2">
                    Time:
                </div>
                <div  className="pr-2">
                    <FontAwesomeIcon icon={dropDown?faChevronUp:faChevronDown}/>
                </div>
            </div>
            <div style={{display:dropDown?'flex':'none'}} className="flex flex-wrap">
                <InstanceHistory/>
                <InstanceHistory/>
                <InstanceHistory/>
                <InstanceHistory/>
                <InstanceHistory/>
            </div>
            
        </div>
    )
}