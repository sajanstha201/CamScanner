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
import { file } from 'jszip'
export function TableExtraction(){
    const {tableExtractionFile:files,setTableExtractionFile:setFiles}=useTableExtractionFile()
    const userInfo=useSelector((state)=>state.userProfile)
    const baseUrl=useSelector((state)=>state.baseUrl.backend)
    const frontendBaseUrl=useSelector((state)=>state.baseUrl.frontend)
    const [resultDetail,setResultDetail]=useState(null)
    const tableExtraction=async ()=>{
        try{
            activate_loader(true);
            const imageFormData = new FormData();
            files.inputFiles.forEach(file => imageFormData.append('image', file));
            
            const response=await axios.post(baseUrl+'api/images/',imageFormData,{
                headers:{ 'Authorization': userInfo.token }
                })
            console.log(response.data)
            setResultDetail(response.data)
            const responseData=response.data.imagedata;
            const tableData={};
            responseData.forEach((value,index)=>tableData[index]=value);
            setFiles(prevData=>({...prevData,result:[responseData]}))
        }
        catch(error){
            console.log(error)
            showAlert(error.response.data.error,'red')
        }
        finally{
            activate_loader(false)
        }
    }
    const viewTable=()=>{
        try{
            const newWin=window.open(frontendBaseUrl+'blank');
            const pdfBlob = new Blob([JSON.stringify(files.result[0])], { type: 'application/pdf' });
            if(pdfBlob){
                const urlObject = URL.createObjectURL(pdfBlob);
                console.log('url',urlObject);
                newWin.location.href=`/display-excel?file=${encodeURIComponent(urlObject)}`
                newWin.focus();
            }
        }
        catch(error){
            showAlert(error,'red')
            console.log(error)
        }
    }
    const downloadTable=()=>{
        try{
            const worksheets=[];
            const excelData=files.result[0]
            Object.keys(excelData).map((key)=>{
                const dataArray=Object.values(excelData[key]).map((row)=>row)
                const worksheet=XLSX.utils.aoa_to_sheet(dataArray)
                worksheets.push({name:key,data:worksheet})
            })
            const workbook=XLSX.utils.book_new();
            worksheets.forEach((worksheet,i)=>{
                XLSX.utils.book_append_sheet(workbook,worksheet.data,'sheet'+worksheet.name)
            })
            console.log(resultDetail)
            XLSX.writeFile(workbook, userInfo.username+resultDetail.images.created+".xlsx");
        }
        catch(error){
            showAlert(error,'red')
        }
    }
    return(
        <>
         <h1>Table extraction</h1>
       <Upload featureName={'table-extraction'} files={files} setFiles={setFiles}></Upload>
       {files.inputFiles.length!=0&&
        <div id='table-extraction-submit-button' className='pdf-conversion-submit-button w-full flex gap-5 m-5'>
            <Button variant='success' size='lg' onClick={tableExtraction} className='flex items-center justify-center' style={{width:'150px'}}> Extract Table</Button>
            {files.result.length!==0&&
            <>
            <Button size='lg' variant='success' className='flex items-center justify-center' onClick={viewTable} style={{width:'150px'}}>View</Button>
            <Button size='lg' variant='success' className='flex items-center justify-center' onClick={downloadTable} style={{width:'150px'}}>Download</Button>
            </>}
        </div>}
        </>
    )
}