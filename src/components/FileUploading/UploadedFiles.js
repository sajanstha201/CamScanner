import './UploadedFiles.css'
import {useState} from 'react';
import AddFiles from './AddFiles';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
function UploadedFiles({files,setFiles,featureName}){
    const [position, setPosition] = useState(0);
    const [scrollAmout,setScrollAmount]=useState(0)
    const deleteImage=(e)=>{
        const image=e.target.parentNode;
        const imageId=image.id.replace('-div','');
        setFiles(prevFiles=>({...prevFiles,inputFiles:prevFiles.inputFiles.filter((_,index)=>index!==parseInt(imageId))}))
    }
    const handleDrop=(e,newIndex)=>{
        e.preventDefault();
        const oldIndex = parseInt(e.dataTransfer.getData('index'));
        const newList=[...files.inputFiles]
        const [movedFile]=newList.splice(oldIndex,1);
        newList.splice(newIndex,0,movedFile)
        setFiles(prevFile=>({...prevFile,inputFiles:newList}))
        console.log(oldIndex,newIndex)

    }
    const handleDragStart=(e,index)=>{
        e.dataTransfer.setData('index',index)
    }
    return (
        <div id={featureName + 'uploaded-outer-container'} className='uploaded-outer-container'>
            <div className={featureName==='pdf-conversion'?'uploaded-inner-container':'uploaded-inner-container-table-extraction'}>
            {files.inputFiles.map((file, index) => (
                <div key={index+ '-div'} className={featureName==='pdf-conversion'?'uploaded-inner-image-container':'uploaded-inner-image-container-table-extraction'} id={index+ '-div'} 
                draggable
                onDragStart={(e)=>{handleDragStart(e,index)}}
                onDragOver={(e)=>{e.preventDefault()}}
                onDrop={(e)=>{handleDrop(e,index)}}> 
                {featureName==='pdf-conversion'&& <div className='indexing-div'>{index+1}</div>}  
                <img src={URL.createObjectURL(file)} alt={`File ${index}`} />
                <div className='cross-buttons' id={index+ '-cross-button'} onClick={deleteImage}></div>
                </div>
                ))}
                {featureName=='pdf-conversion'&&<AddFiles featureName={featureName} files={files} setFiles={setFiles}></AddFiles>}
            </div>
        </div>
    );
}
    export default UploadedFiles;