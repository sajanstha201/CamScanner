import './TableExtraction.css'
import Upload from '../FileUploading/Upload'
import { useState } from 'react'
export function TableExtraction(){
    const [files,setFiles]=useState([])
    const tableExtraction=()=>{

    }
    return(
        <>
         <h1>Table extraction</h1>
       <Upload featureName={'table-extraction'} files={files} setFiles={setFiles}></Upload>
       
        </>
    )
}