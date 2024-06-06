import './UploadedFiles.css'
import logo from '../../static/images/logo.jpg'
import { useEffect ,useState} from 'react';
import { FaChevronUp,FaChevronDown } from 'react-icons/fa'; // FontAwesome
import { MdExpandLess } from 'react-icons/md'
function UploadedFiles({files,setFiles,FeatureName}){
    const [position, setPosition] = useState(0);
    const [scrollAmout,setScrollAmount]=useState(0)
    const deleteImage=(e)=>{
        const image=e.target.parentNode;
        const imageName=image.id.replace('-div','');
        console.log(imageName)
        setFiles(prevFiles=>prevFiles.filter((file)=>file.name!==imageName))
        console.log(files)
    }
    useEffect(() => {
        const displayFiles = document.querySelector('.uploaded-inner-container');
        displayFiles.innerHTML = ''; 
        for (let i = 0; i < files.length; i++) {
            const innerdisplayFiles=document.createElement('div')
            innerdisplayFiles.className='uploaded-inner-image-container'
            innerdisplayFiles.id=files[i].name+'-div';
            const file = files[i];
            const imgElement = document.createElement('img');
            imgElement.src = logo;
            imgElement.alt = `File ${i}`;
            innerdisplayFiles.appendChild(imgElement);
            const crossButton=document.createElement('div');
            crossButton.className='cross-buttons';
            crossButton.id=files[i].name+'-cross-button';
            crossButton.onclick=deleteImage;
            innerdisplayFiles.appendChild(crossButton)
            displayFiles.appendChild(innerdisplayFiles)
        }
    }, [files]); 
    return (
        <div id={FeatureName + 'uploaded-outer-container'} className='uploaded-outer-container'>
            <div className='uploaded-inner-container'>
            </div>
        </div>
    );
}
    export default UploadedFiles;