import { useContext, useState } from "react";
import Upload from "../FileUploading/Upload";
import { useDocumentAnalysisFile } from "../../context/AppProvider";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { activate_loader } from "../AlertLoader";
import mammoth from "mammoth";
function DocumentAnalysis(){
    const baseUrl=useSelector((state)=>state.baseUrl.backend);
    const {documentAnalysisFile:files,setDocumentAnalysisFile:setFiles}=useDocumentAnalysisFile();
    const userInfo=useSelector((state)=>state.userProfile);
    const frontendBaseUrl=useSelector((state)=>state.baseUrl.frontend)
    const [urlObject,setUrlObject]=useState()
    const [docData,setDocData]=useState()
    const documentAnalysis=async ()=>{
        try{
            activate_loader(true)
            console.log("sending request to api")
            const imageData=new FormData();
            files.inputFiles.forEach((file)=>imageData.append('image',file))
            const response = await axios.post(baseUrl + 'api/convert-doc/', imageData, {
                headers: {
                    'Authorization': userInfo.token,
                }
            });
            setDocData(response.data)
        }
        catch(error){
            console.log(error)
        }
        finally{
            activate_loader(false)
        }
    }
    const downloadDoc=()=>{
        const blob = new Blob([docData], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download ='donload.docx';
        a.click();
        window.URL.revokeObjectURL(url);
    }
    return(
        <>
            <h1>Document Analysis</h1>
            <Upload featureName={'document-analysis'} files={files} setFiles={setFiles}></Upload>
            {files.inputFiles.length!==0&&<Button variant="success" size='lg' onClick={documentAnalysis} className="mt-4">Analyze</Button>}
            <Button onClick={downloadDoc}>
                <a href={urlObject} download='download.docx'>Download</a>
            </Button>
        </>
    );
}

export default DocumentAnalysis