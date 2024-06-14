import './TableExtraction.css'
import Upload from '../FileUploading/Upload'
import { useState } from 'react'
import { useTableExtractionFile } from '../../context/AppProvider'
import { activate_loader, showAlert } from '../AlertLoader'
import axios from 'axios'
import { connect, useSelector } from 'react-redux'
import * as XLSX from 'xlsx';
import ReactDOM from 'react-dom';
import { NewLoader } from '../AlertLoader/NewLoader'
import { Button } from 'react-bootstrap'
export function TableExtraction(){
    const {tableExtractionFile:files,setTableExtractionFile:setFiles}=useTableExtractionFile()
    const userInfo=useSelector((state)=>state.userProfile)
    const baseUrl=useSelector((state)=>state.baseUrl.backend)
    const frontendBaseUrl=useSelector((state)=>state.baseUrl.frontend)
    const tableExtraction=async ()=>{
        try{
            activate_loader(true);
            const imageFormData = new FormData();
            files.inputFiles.forEach(file => imageFormData.append('image', file));
            const newWin=window.open(frontendBaseUrl+'blank');
            const response=await axios.post(baseUrl+'api/images/',imageFormData,{
                headers:{ 'Authorization': userInfo.token }
                })
            const responseData=response.data.imagedata;
            const tableData={};
            responseData.forEach((value,index)=>tableData[index]=value);
            const pdfBlob = new Blob([JSON.stringify(responseData)], { type: 'application/pdf' });
            if(pdfBlob){
                const urlObject = URL.createObjectURL(pdfBlob);
                console.log('url',urlObject);
                newWin.location.href=`/display-excel?file=${encodeURIComponent(urlObject)}`
                newWin.focus();
            }
        }
        catch(error){
            console.log(error)
            showAlert(error,'red')
        }
        finally{
            activate_loader(false)
        }
    }
    return(
        <>
         <h1>Table extraction</h1>
       <Upload featureName={'table-extraction'} files={files} setFiles={setFiles}></Upload>
       {files.inputFiles.length!=0&&
        <div id='table-extraction-submit-button'>
            <Button variant='success' size='lg' onClick={tableExtraction} > Extract Table</Button>
        </div>}
        </>
    )
}