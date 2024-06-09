import './AddFiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus ,faCircle } from '@fortawesome/free-solid-svg-icons';
function AddFiles({featureName,files,setFiles}){
    const addAdditionalFiles=(e)=>{
        const additionalFiles=document.getElementById(featureName+'-additional-input-files').files
        setFiles(prevFiles=>[...prevFiles,...additionalFiles])
    }
    return(
        <div  className='additional-files'>
            <label htmlFor={featureName+'-additional-input-files' } className='additional-input-label' style={{fontSize: '2em' }}>
                <FontAwesomeIcon icon={faCircle} style={{ color: 'lightgray', position: 'absolute', width: '4em', height: '4em' }} />
                <FontAwesomeIcon icon={faPlus} style={{ position: 'absolute', width: '2em', height: '2em' }} />
            </label>
            <input type='file' className='additional-input-files' accept='.png' id={featureName+'-additional-input-files'} onChange={addAdditionalFiles}></input> 
        </div>
    );
}

export default AddFiles;