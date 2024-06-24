import './PdfConversion.css';
import { createElement, useState } from 'react';
import Upload from '../FileUploading/Upload';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { showAlert, activate_loader } from '../AlertLoader/index';
import { usePdfConversionFile } from '../../context/AppProvider';
import { Button } from 'react-bootstrap';
export function PdfConversion() {
    const {pdfConversionFile: files,setPdfConversionFile:setFiles}=usePdfConversionFile()
    //const [files,setFiles]=useState({inputFiles:[],result:'asfsld'})
    const [resultDetail, setResultDetail] = useState(null);
    const userProfile = useSelector((state) => state.userProfile);
    const baseUrl = useSelector((state) => state.baseUrl.backend);
    const frontendBaseUrl=useSelector((state)=>state.baseUrl.frontend)
    const convertToPdf = async () => {
        activate_loader(true);
        const imageFormData = new FormData();
        files.inputFiles.forEach(file => imageFormData.append('images', file));
        try {
            console.log(userProfile)
            
            const response = await axios.post(baseUrl + 'api/scanned-files/', imageFormData, {
                headers: { 'Authorization': userProfile.token }
            });
            setResultDetail(response.data);
            const pdfResponse = await axios.get(baseUrl + response.data.file.substring(1) + '/', {
                headers: { 'Authorization': userProfile.token },
            });
            setFiles(prevData=>({...prevData,result:[pdfResponse.data]}))

        } catch (error) {
            console.log(error)
            showAlert(error.message || error, 'red');
        } finally {
            activate_loader(false);
        }
    };
    const ViewPDF=()=>{
        try{
            const newWin=window.open(frontendBaseUrl+'blank')
            const pdfBlob = new Blob([files.result[0]], { type: 'application/pdf' });
            if(pdfBlob){
                const urlObject = URL.createObjectURL(pdfBlob);
                newWin.location.href=`/display-pdf?file=${encodeURIComponent(urlObject)}`
                newWin.focus();
            }
            else{
                showAlert('Empty Pdf', 'red');
            }
        }
        catch(error){
            showAlert(error,'red');
        }
    }
    const downloadPDF = () => {
        try{
            const blob = new Blob([files.result[0]], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            const a = document.createElement('a');
            a.style.display = 'none';
            document.body.appendChild(a);
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download =resultDetail.file.split('/').pop();
            a.click();
            window.URL.revokeObjectURL(url);
        }
        catch(error){
            showAlert(error,'red');
            console.log(error)
        }
    };
    
    return (
        <div>
            <h1>PDF Conversion</h1>
            <Upload featureName={'pdf-conversion'} files={files} setFiles={setFiles} />
            {files.inputFiles.length !== 0 && (
                <div id='pdf-conversion-submit-button' className='pdf-conversion-submit-button flex gap-5 m-5'>
                    <Button onClick={convertToPdf} size='lg' variant='success' className=' flex items-center justify-center' style={{width:'150px'}}>Convert</Button>
                    {files.result.length!==0&&<>
                        <Button size='lg' variant='success' className=' flex items-center justify-center' onClick={ViewPDF} style={{width:'150px'}}>View</Button>
                        <Button size='lg' variant='success' className='flex items-center justify-center' onClick={downloadPDF} style={{width:'150px'}}>Download</Button>
                    </>
                    }
                </div>
            )}

        </div>
    );
}
