import { useState } from "react";
import Upload from "../FileUploading/Upload";
function DocumentAnalysis(){
    const [files,setFiles]=useState([])
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