import { useContext, useState } from "react";
import Upload from "../FileUploading/Upload";
import { useDocumentAnalysisFile } from "../../context/AppProvider";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { activate_loader, showAlert } from "../AlertLoader";
import mammoth from "mammoth";
import { file } from "jszip";
function DocumentAnalysis(){
    const baseUrl=useSelector((state)=>state.baseUrl.backend);
    const {documentAnalysisFile:files,setDocumentAnalysisFile:setFiles}=useDocumentAnalysisFile();
    const userInfo=useSelector((state)=>state.userProfile);
    const frontendBaseUrl=useSelector((state)=>state.baseUrl.frontend)
    const documentAnalysis=async ()=>{
        try{
            activate_loader(true)
            console.log("sending request to api")
            const imageData=new FormData();
            files.inputFiles.forEach((file)=>imageData.append('image',file))
            const urlResponse = await axios.post(baseUrl + 'api/convert-doc/', imageData, {
                headers: {
                    'Authorization': userInfo.token,
                },
            });
            console.log(urlResponse.data)
            setFiles(prevFile=>({...prevFile,result:[urlResponse.data]}))
        }
        catch(error){
            console.log(error)
        }
        finally{
            activate_loader(false)
        }
    }
    const downloadDoc=async()=>{
        try{
            activate_loader(true)
            console.log(files)
            const response=await axios.get(baseUrl+files.result[0].document.substring(1),{
                responseType:'arraybuffer',
            })
            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            const a = document.createElement('a');
            a.style.display = 'none';
            document.body.appendChild(a);
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download =files.result[0].document.split('/').pop();
            a.click();
            window.URL.revokeObjectURL(url);
        }
        catch(error){
            showAlert(error,'red')
            console.log(error)
        }
        finally{
            activate_loader(false)
        }

    }
    return(
        <>
            <h1>Document Analysis</h1>
            <Upload featureName={'document-analysis'} files={files} setFiles={setFiles}></Upload>
            {(files.result.length===0&&files.inputFiles.length!==0)&&<Button variant="success" size='lg' onClick={documentAnalysis} className="mt-4">Analyze</Button>}
            {files.result.length!==0&&<Button onClick={downloadDoc} size='lg' className="mt-4">Download</Button>}
        </>
    );
}

export default DocumentAnalysis