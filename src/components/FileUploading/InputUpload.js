import { useEffect } from 'react'
import './InputUpload.css'
function InputUpload({featureName,setFiles,files}){
    const changeInput=()=>{
        setFiles([...document.getElementById(featureName+'-upload-input-files').files])
    }
    return(
        <>
            <div id={featureName+"-upload-outer-container"} className='upload-outer-container'>
                <div id={featureName+"-upload-container"} className='upload-container'>
                    <label htmlFor={featureName+"-upload-input-files"} id={featureName+"-label"} className='upload-label'><p>Upload or Drop Job Description</p> <p> as .pdf or .docx file </p></label>
                    <input type="file" id={featureName+"-upload-input-files"} accept=".png" className='upload-input-files'multiple onChange={changeInput}></input>
                </div>
            </div>
        </>
    )
}
export default InputUpload