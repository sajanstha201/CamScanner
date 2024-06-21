import { useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState,useEffect } from "react";
import * as XLSX from 'xlsx'
import { Card ,Button} from "react-bootstrap";
export const DisplayExcel=()=>{
    const [excelData,setExcelData]=useState()
    const loc=useLocation();
    const queryParameters=new URLSearchParams(loc.search)
    const file=queryParameters.get('file')
    useEffect(()=>{
        try{
        const fetchData= async()=>{
            const response=await axios.get(file)
            console.log(response.data)
            setExcelData(response.data)
        }
        fetchData();
        }
        catch(error){
            console.log(error)
        }   
    },[]);
    const downloadExcelFile=()=>{
        const worksheets=[];
        Object.keys(excelData).map((key)=>{
            const dataArray=Object.values(excelData[key]).map((row)=>row)
            const worksheet=XLSX.utils.aoa_to_sheet(dataArray)
            worksheets.push({name:key,data:worksheet})
        })
        const workbook=XLSX.utils.book_new();
        worksheets.forEach((worksheet,i)=>{
            XLSX.utils.book_append_sheet(workbook,worksheet.data,'sheet'+worksheet.name)
        })
        XLSX.writeFile(workbook, "table extraction.xlsx");
    }
    return (
        <>
        <div id='display-excel'>
            <Card style={{border:'none'}}>
                <Card.Title>
                <h1>Extracted Tables</h1>
                <Button onClick={downloadExcelFile} variant="success">Download</Button>
                </Card.Title>
                <Card.Body className="d-flex flex-column align-items-center">
                {excelData && Object.keys(excelData).map((key) => (
                    <fieldset style={{width:'60%'}}>
                        <legend>Table {key}</legend>
                    <Table key={key} striped bordered hover className="m-5" >
                            <thead>
                            </thead>
                        <tbody>
                            {Object.keys(excelData[key]).map((innerKey) => (
                                <tr key={innerKey}>
                                    {excelData[key][innerKey].map((cell, index) => (
                                        <td key={index} style={{maxWidth:'100px'}}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </fieldset>

                ))}  
                </Card.Body>
            </Card>
        </div>
        </>
    );
}