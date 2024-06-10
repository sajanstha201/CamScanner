import { useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState,useEffect } from "react";
import * as XLSX from 'xlsx'
export const DisplayExcel=()=>{
    const [excelData,setExcelData]=useState()
    const loc=useLocation();
    const queryParameters=new URLSearchParams(loc.search)
    const file=queryParameters.get('file')
    useEffect(()=>{
        try{
        const fetchData= async()=>{
            const response=await axios.get(file)
            setExcelData(response.data)
        }
        fetchData();
        }
        catch(error){
            console.log(error)
        }   
    },[]);
    const downloadExcelFile=()=>{
        console.log(excelData)
        const worksheets=[];
        Object.keys(excelData).map((key)=>{
            const dataArray=Object.values(excelData[key]).map((row)=>row)
            const worksheet=XLSX.utils.aoa_to_sheet(dataArray)
            worksheets.push({name:key,data:worksheet})
        })
        console.log(worksheets)
        
        const workbook=XLSX.utils.book_new();
        worksheets.forEach((worksheet,i)=>{
            XLSX.utils.book_append_sheet(workbook,worksheet.data,'sheet'+worksheet.name)
        })
        XLSX.writeFile(workbook, "table extraction.xlsx");
    }
    return (
        <>
        <div id='display-excel'>
            <div>
                <h1>Extracted Tables</h1>
                <button onClick={downloadExcelFile}>Download</button>
            </div>
            <div>
                {excelData && Object.keys(excelData).map((key) => (
                    <Table key={key} striped bordered hover>
                        <tbody>
                            {Object.keys(excelData[key]).map((innerKey) => (
                                <tr key={innerKey}>
                                    {excelData[key][innerKey].map((cell, index) => (
                                        <td key={index}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ))}            
            </div>
        </div>
        </>
    );
}