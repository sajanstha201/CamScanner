import './PdfConversion.css';
import { useState } from 'react';
import Upload from '../FileUploading/Upload';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { showAlert, activate_loader } from '../AlertLoader/index';
import { usePdfConversionFile } from '../../context/AppProvider';

export function PdfConversion() {
    const {pdfConversionFile: files,setPdfConversionFile:setFiles}=usePdfConversionFile()
    //const [files,setFiles]=useState({inputFiles:[],result:'asfsld'})
    const [resultDetail, setResultDetail] = useState(null);
    const userProfile = useSelector((state) => state.userProfile);
    const baseUrl = useSelector((state) => state.baseUrl).value;
    const convertToPdf = async () => {
        activate_loader(true);
        const imageFormData = new FormData();
        files.inputFiles.forEach(file => imageFormData.append('images', file));
        try {
            const response = await axios.post(baseUrl + 'api/scanned-files/', imageFormData, {
                headers: { 'Authorization': userProfile.token }
            });
            setResultDetail(response.data);
            const pdfResponse = await axios.get(baseUrl + response.data.file.substring(1) + '/', {
                headers: { 'Authorization': userProfile.token },
            });
            const pdfBlob = new Blob([pdfResponse.data], { type: 'application/pdf' });
            if(pdfBlob){
                const url = URL.createObjectURL(pdfBlob);
                const newWin = window.open(`/display-pdf?file=${encodeURIComponent(url)}`, '_blank');
                newWin.focus();
            }
            else{
                showAlert('Empty Pdf', 'red');
            }
        } catch (error) {
            console.log(error)
            showAlert(error.message || error, 'red');
        } finally {
            activate_loader(false);
        }
    };
    return (
        <div>
            <h1>PDF Conversion</h1>
            <Upload featureName={'pdf-conversion'} files={files} setFiles={setFiles} />
            {files.inputFiles.length !== 0 && (
                <div id='pdf-conversion-submit-button' className='pdf-conversion-submit-button'>
                    <div onClick={convertToPdf}>
                        Convert
                    </div>
                </div>
            )}
        </div>
    );
}
