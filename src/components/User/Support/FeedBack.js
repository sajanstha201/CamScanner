import { useState } from "react"
import { Report,Suggestion } from "."
import { Button } from "react-bootstrap"
export const FeedBack=()=>{
    const [isIssueActivate,setIsIssueAcitvate]=useState(true)
    return(
        <div>
            <div>
            <h1>This is FeedBack Page</h1>
            </div>
            <Button onClick={()=>setIsIssueAcitvate(true)}>Issuce</Button>
            <Button onClick={()=>setIsIssueAcitvate(false)}>Suggestion</Button>
            {isIssueActivate&&<Report/>}
            {!isIssueActivate&&<Suggestion/>}
        </div>
    )
}