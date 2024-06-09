import './TableExtraction.css'
import Upload from '../FileUploading/Upload'
import { useState } from 'react'
import { useTableExtractionFile } from '../../context/AppProvider'
import { activate_loader } from '../AlertLoader'
import axios from 'axios'
import { useSelector } from 'react-redux'
export function TableExtraction(){
    const {tableExtractionFile:files,setTableExtractionFile:setFiles}=useTableExtractionFile()
    const userInfo=useSelector((state)=>state.userProfile)
    const baseUrl=useSelector((state)=>state.baseUrl.value)
    const tableExtraction=async ()=>{
        try{
            activate_loader(true);
            const imageFormData = new FormData();
            files.inputFiles.forEach(file => imageFormData.append('image', file));
            const response=await axios.post(baseUrl+'api/images/',imageFormData,{
                headers:{ 'Authorization': userInfo.token }
            })
            /*
            const respone2=await axios.get(baseUrl+'',{
                Headers:{ 'Authorization': userInfo.token }
            })
            console.log(respone2)
            */
        }
        catch(error){
            console.log(error)
        }
        finally{
            activate_loader(false)
        }
    }
    return(
        <>
         <h1>Table extraction</h1>
       <Upload featureName={'table-extraction'} files={files} setFiles={setFiles}></Upload>
       {files.inputFiles.length!=0&&<div id='table-extraction-submit-button'><div onClick={tableExtraction} > Extract Table</div></div>}
        </>
    )
}