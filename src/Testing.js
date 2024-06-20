import axios from "axios"
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux"

export const Testing=()=>{
    const baseUrl=useSelector((state)=>state.baseUrl).backend
    const userInfo=useSelector((state)=>state.userProfile)
    const pdfTesting=async()=>{
        const response = await axios.get(baseUrl + 'api/scanned-files/',{
            headers: { 'Authorization': userInfo.token }
        });
        console.log(response.data)
    }
    return(
        <>
        <h1>This is Testing Section</h1>
        <div>
        <Button onClick={pdfTesting}>Pdf Conversion</Button>
        </div>
        </>
    )
}