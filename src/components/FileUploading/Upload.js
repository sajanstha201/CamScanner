import './Upload.css'
function Upload({FeatureName}){
    return(
        <>
            <div id={FeatureName+"-upload-outer-container"} className='upload-outer-container'>
                <div id={FeatureName+"-upload-container"} className='upload-container'>
                    <label htmlFor={FeatureName+"-upload-input-files"} id={FeatureName+"-label"} className='upload-label'><p>Upload or Drop Job Description</p> <p> as .pdf or .docx file </p></label>
                    <input type="file" id={FeatureName+"-upload-input-files"} accept=".pdf,.docx" className='upload-input-files'multiple></input>
                </div>
            </div>
        </>
    )
}
export default Upload