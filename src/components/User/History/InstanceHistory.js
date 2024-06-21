import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faL } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export const InstanceHistory=({instanceHistoryData,icon})=>{
    return(
        <div className={`border bg-[white] hover:bg-gray-100 h-12 w-full flex  items-center jusitfy-center  relative cursor-pointer`}>
            <div className="absolute left-2">
               {icon}
            </div>
            <div className="absolute left-10">
                {instanceHistoryData}
            </div>
            <div className="absolute left-[50%]">
                Date:
            </div>  
            <div className="absolute right-12">
                Pages
            </div>
            <div className="absolute right-3 ">
                    <FontAwesomeIcon icon={faDownload}/>
            </div>
        </div>
    )
}