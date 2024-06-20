import { InstanceHistory } from "./InstanceHistory"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
export const OneDayHistory=({oneDayHistoryData})=>{
    const [dropDown,setDropDown]=useState(false)
    return(
        <div className="bg-gray-100 w-full flex flex-col items-start border">
            <div className={`bg-gray-200 w-full lg:h-[40px]  items-center justify-between flex `} onClick={()=>{setDropDown(!dropDown)}}>
                <div className="pl-2">
                    Date:{oneDayHistoryData.time}
                </div>
                <div  className="pr-2">
                    <FontAwesomeIcon icon={dropDown?faChevronUp:faChevronDown}/>
                </div>
            </div>
            <div style={{display:dropDown?'flex':'none'}} className="flex flex-wrap">
                {oneDayHistoryData.data.map((value,index)=>(
                    <InstanceHistory instanceHistoryData={value}/>
                ))}
            </div>
            
        </div>
    )
}