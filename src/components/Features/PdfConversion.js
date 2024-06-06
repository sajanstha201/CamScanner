import './PdfConversion.css'
import Upload from '../FileUploading/Upload'
import { useState } from 'react'
import UploadedFiles from '../FileUploading/UploadedFiles'
export function PdfConversion(){
    const [isUploadStarted,setIsUploadStared]=useState(false)
    const [files,setFiles]=useState([{name:'image1',data:1},{name:'image2',data:2},{name:'image3',data:3},{name:'image1',data:1},{name:'image2',data:2},{name:'image3',data:3},{name:'image1',data:1},{name:'image2',data:2},{name:'image3',data:3},{name:'image1',data:1}])
    return(
        <div>
            <h1>PDF conversion</h1>
            <Upload FeatureName={'pdf-conversion'}/>
            <UploadedFiles files={files} setFiles={setFiles} FeatureName={'pdf-conversion'}></UploadedFiles>
        </div>
    )
}