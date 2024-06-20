import { useState } from "react"
import { HelpCenter,FeedBack,SupportInbox} from "."

export const Support=()=>{
    const [component,setComponent]=useState('')
    const renderComponent=()=>{
        switch(component){
            case 'supportInbox':
                return <SupportInbox/>
            case 'feedBack':
                return <FeedBack/>
            default:
                return <HelpCenter/>
        }
    }
    return(
        <>
         <div className="w-full  flex flex-col lg:flex-row justify-center">
              <div className="   flex  flex-col items-start bg-gray-100 w-full md:w-80 lg:w-80">
                 <div className="flex flex-col gap-2 w-full">
                     <div onClick={()=>{setComponent('helpCenter')}} className="flex justify-center gap-2 mt-5  px-8 py-2 backdrop-blur-lg bg-gray-400/40 hover:bg-gray-500/80 items-center h-12 w-full  text-zinc-900 font-light rounded-sm text-sm">  <h5>Help center</h5> </div>
                     <div onClick={()=>{setComponent('supportInbox')}} className="flex justify-center items-start  px-8 py-2 backdrop-blur-lg bg-gray-400/40 hover:bg-gray-500/80 h-12 w-full  text-zinc-900 font-light rounded-sm text-sm"> <h5>Support Inbox</h5> </div>
                     <div onClick={()=>{setComponent('feedBack')}} className="flex justify-center items-start   px-8 py-2 backdrop-blur-lg bg-gray-400/40 hover:bg-gray-500/80 h-12 w-full  text-zinc-900 font-light rounded-sm text-sm"> <h5>Feed Back</h5> </div>
                 </div>
              </div>
              <div className="w-full h-screen flex ">
                {renderComponent()}        
              </div>
         </div>
        </>
    )
}
