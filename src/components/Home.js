import axios from "axios"
import { useSelector } from "react-redux"
import { activate_loader,alert_message, showAlert } from "./AlertLoader"
import { width } from "@fortawesome/free-solid-svg-icons/fa0"
import { useState } from "react"
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
    const pdfData=
`%PDF-1.3
%���� ReportLab Generated PDF document http://www.reportlab.com
1 0 obj
<<
/F1 2 0 R
>>
endobj
2 0 obj
<<
/BaseFont /Helvetica /Encoding /WinAnsiEncoding /Name /F1 /Subtype /Type1 /Type /Font
>>
endobj
3 0 obj
<<
/PageMode /UseNone /Pages 5 0 R /Type /Catalog
>>
endobj
4 0 obj
<<
/Author (anonymous) /CreationDate (D:20240607163443-05'00') /Creator (ReportLab PDF Library - www.reportlab.com) /Keywords () /ModDate (D:20240607163443-05'00') /Producer (ReportLab PDF Library - www.reportlab.com) 
  /Subject (unspecified) /Title (untitled) /Trapped /False
>>
endobj
5 0 obj
<<
/Count 0 /Kids [  ] /Type /Pages
>>
endobj
xref
0 6
0000000000 65535 f 
0000000073 00000 n 
0000000104 00000 n 
0000000211 00000 n 
0000000279 00000 n 
0000000575 00000 n 
trailer
<<
/ID 
[<680c7eea8d064f6ca6ae80b19f202962><680c7eea8d064f6ca6ae80b19f202962>]
% ReportLab generated PDF document -- digest (http://www.reportlab.com)

/Info 4 0 R
/Root 3 0 R
/Size 6
>>
startxref
629
%%EOF`
const [url_,setUrl]=useState()
 const displayPDF=()=>{
    const blobFile=new Blob([pdfData], { type: 'application/pdf' });
   // const pdfFile=new File(blobFile)
    const url_=URL.createObjectURL(blobFile);
    setUrl(url_)
    const reader=new FileReader()
    reader.onload=(e)=>{
       // console.log(e.target.result)
    }
    reader.readAsText(blobFile)
 }
    return(
        <>
        <button onClick={displayPDF}>Display PDF</button>
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
        <input id='input_image' type='file' accept=".pdf" multiple></input>
        
        <button onClick={changeWindow}>
            new window
        </button>
        <div id='pdf-id' style={{width:'400px',height:'800px'}}>
        </div>

        </>
    )
}
export default Home