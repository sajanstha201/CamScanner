import axios from "axios"
import { useSelector } from "react-redux"
import { activate_loader,alert_message } from "./AlertLoader"
function Home({token}){
    const base_url=useSelector((state)=>state.base_url.value)
    const userInfo=useSelector((state)=>state.user_profile)
    //this will return all the files that was uploaded by the users
    const request_=async()=>{
        console.log('sajan shrestha')
        await axios.get('http://192.168.1.65:8000/api/scanned-files',{
            headers:{
                'Authorization':'Token 15a1ceff99b54f3eb64252ad8a8d42f3b56b118a'
            }
        })
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    //this will return those image file that is being send to api
    const upload_image=async ()=>{
        const formData = new FormData()
        var images=document.getElementById('input_image').files
        console.log(images)
        const image_list=[]
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }
        await axios.post('http://192.168.1.65:8000/api/scanned-files/',formData,{
            headers:{
                'Authorization':'Token 15a1ceff99b54f3eb64252ad8a8d42f3b56b118a'
            }
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    

    const table_extraction=async ()=>{
        const formData = new FormData()
        var images=document.getElementById('table-extraction-input').files
        console.log(images)
        const image_list=[]
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }
        await axios.post('http://192.168.1.65:8000/api/scanned-files/',formData,{
            headers:{
                'Authorization':'Token 15a1ceff99b54f3eb64252ad8a8d42f3b56b118a'
            }
        })
    }
    return(
        <>
        This is Home Page
        <button onClick={upload_image}>Click me{token}</button>
        <input id='input_image' type='file' accept=".png" multiple></input>


        <br></br>
        <br></br>
        <h1>Table Extraction</h1>
        <button onClick={table_extraction}>Table Extraction</button>
        <input id='table-extraction-input' type='file' accept=".png"></input>
        </>
    )
}
export default Home