import axios from "axios"
import { useSelector } from "react-redux"
import { activate_loader,alert_message, showAlert } from "./AlertLoader"
import { width } from "@fortawesome/free-solid-svg-icons/fa0"
import { useState } from "react"
import * as XLSX from 'xlsx';
function Home({token}){
    const base_url=useSelector((state)=>state.baseUrl.value)
    const userInfo=useSelector((state)=>state.userProfile)
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
    const showPDF=()=>{
        const file=document.getElementById('input_image').files[0];
        const reader=new FileReader();
        reader.onload=(e)=>{
            console.log(e.target)
            const pdfDiv=document.getElementById('pdf-id');
            const embed = document.createElement('embed');
            pdfDiv.innerHTML=''
            embed.setAttribute('width', '100%');
            embed.setAttribute('height', '600px');
            embed.setAttribute('src', e.target.result);
            pdfDiv.appendChild(embed);
        }
        reader.onerror=(error)=>{
            showAlert(error,'red')
        }
        reader.readAsDataURL(file)
    }
    const changeWindow=()=>{
        const file=document.getElementById('input_image').files[0];
        const reader=new FileReader()
        reader.onload=(e)=>{
            console.log(e.target.result)
        }
        reader.readAsText(file)
        console.log(file)
        const url=URL.createObjectURL(file)
        const newWin=window.open(`/display-pdf?file=${encodeURIComponent(url)}`, '_blank')
        newWin.focus()
    }
    const handleExport = () => {
        const ws_data = [
        { "name": "John Doe", "age": 30, "city": "New York" },
        { "name": "Anna Smith", "age": 25, "city": "London" },
        { "name": "Peter Johnson", "age": 40, "city": "Paris" }
        ];
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(ws_data);
        const htmlTable = XLSX.utils.sheet_to_html(ws);
        document.getElementById('excel-id').innerHTML=htmlTable;
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, "table extraction.xlsx");
      };
      const [excelData,setExcelData]=useState()
    const displayExcel=()=>{
        const ws_data = {
            "0":{
                "0": ['Seller', 'Adam', 'Adam', 'Adam', 'Harry', 'Harry', 'Harry', 'Harry', 'Steve', 'Steve'],
                "1":['Order ID', '101', '104', '107','103','106', '108','109','102','105'],
                "2":['Product', 'Apples', 'Apples','Bananas','Lemons','Lemons','Oranges','Bananas', 'Bananas', 'Lemons']
            },
            "1":{
                "0":['Order ID', '101', '102', '103', '104', '105', '106', '107', '108', '109'],
                "1":['Seller', 'Adam', 'Steve', 'Harry', 'Adam', 'Steve', 'Harry', 'Adam', 'Harry', 'Harry'],
                "2":['Date', '1-Oct-18', '1-Oct-18', '2-Oct-18', '2-0ct-18', '2-0ct-18', '3-0ct-18', '4-Oct-18', '4-Oct-18', '5-Oct-18']
            }    
        }
        console.log(Object.keys(ws_data))
        const new_data={}
        Object.keys(ws_data).map((key)=>{
            Object.keys(ws_data[key]).map((innerKey,innerValue)=>{
                ws_data[key][innerKey].map((k,v)=>{
                    console.log(k)
                })
            })
       })


        setExcelData(ws_data)
    }
const [url_,setUrl]=useState()
    return(
        <>
        <button id='createExcel' onClick={displayExcel}>Create Excel</button>
        <button onClick={()=>{console.log(excelData)}}>exell</button>
        <div id='display-excel'>
                <h1>Table Display</h1>
                {excelData && Object.keys(excelData).map((key) => (
                    <table key={key} className="table">
                        <tbody>
                            {Object.keys(excelData[key]).map((innerKey) => (
                                <tr key={innerKey}>
                                    {excelData[key][innerKey].map((cell, index) => (
                                        <td key={index}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ))}
            </div>
        <h1>lfk</h1>
        <embed id='pdf-content'  type="application/pdf" src={url_}>
        </embed>
        <div>
            <div>
                pdf conversion
            </div>
            <div>
                table extraction
            </div>
            <div>
                document analysis
                </div>
        </div>
        <button onClick={showPDF}>Click me{token}</button>
        <input id='input_image' type='file' accept=".xlsx" multiple></input>
        
        <button onClick={changeWindow}>
            new window
        </button>
        <div id='excel-id' style={{width:'400px',height:'800px'}}>
        </div>

        </>
    )
}
export default Home