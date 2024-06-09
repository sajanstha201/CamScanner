import { useState } from "react";
import Upload from "../FileUploading/Upload";
import { useDocumentAnalysisFile } from "../../context/AppProvider";
function DocumentAnalysis(){
    const {documentAnalysisFile:files,setDocumentAnalysisFile:setFiles}=useDocumentAnalysisFile()
    const documentAnalysis=()=>{
        
    }
    return(
        <>
            <h1>Document Analysis</h1>
            <Upload featureName={'document-analysis'} files={files} setFiles={setFiles}></Upload>
        </>
    );
}

export default DocumentAnalysis