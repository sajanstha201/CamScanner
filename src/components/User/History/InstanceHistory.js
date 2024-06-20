import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faL } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export const InstanceHistory=({instanceHistoryData})=>{
    const [isHover,setIsHover]=useState(false)
    return(
        <div className={`border ${isHover?'bg-gray-400':'bg-white'} shadow-md rounded-md w-[120px] h-[120px] m-3 flex items-center justify-center`}
        onMouseEnter={()=>{setIsHover(true)}}
        onMouseLeave={()=>{setIsHover(false)}}>
            <div className={`${isHover?'hidden':'flex'}`}>
                {instanceHistoryData}
            </div>
            <div className={`${isHover?'flex':'hidden'}`}>
                <FontAwesomeIcon icon={faDownload}/>
            </div>

        </div>
    )
}