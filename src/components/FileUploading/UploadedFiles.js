import './UploadedFiles.css'
import {useState} from 'react';
import AddFiles from './AddFiles';
function UploadedFiles({files,setFiles,featureName}){
    const [position, setPosition] = useState(0);
    const [scrollAmout,setScrollAmount]=useState(0)
    const deleteImage=(e)=>{
        const image=e.target.parentNode;
        const imageId=image.id.replace('-div','');
        setFiles(prevFiles=>({...prevFiles,inputFiles:prevFiles.inputFiles.filter((_,index)=>index!==parseInt(imageId))}))
        console.log(files)
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
            <div className='uploaded-inner-container'>
            {files.inputFiles.map((file, index) => (
                <div key={index+ '-div'} className='uploaded-inner-image-container' id={index+ '-div'} 
                draggable
                onDragStart={(e)=>{handleDragStart(e,index)}}
                onDragOver={(e)=>{e.preventDefault()}}
                onDrop={(e)=>{handleDrop(e,index)}}>   
                <div className='indexing-div'>{index+1}</div>
                <img src={URL.createObjectURL(file)} alt={`File ${index}`} />
                <div className='cross-buttons' id={index+ '-cross-button'} onClick={deleteImage}></div>
                </div>
                ))}
                <AddFiles featureName={featureName} files={files} setFiles={setFiles}></AddFiles>
            </div>
        </div>
    );
}
    export default UploadedFiles;