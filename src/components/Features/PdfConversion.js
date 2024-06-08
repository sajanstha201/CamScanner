import './PdfConversion.css';
import { useState } from 'react';
import Upload from '../FileUploading/Upload';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { showAlert, activate_loader } from '../AlertLoader/index';

export function PdfConversion() {
    const [files, setFiles] = useState([]);
    const [resultDetail, setResultDetail] = useState(null);
    const user_profile = useSelector((state) => state.user_profile);
    const base_url = useSelector((state) => state.base_url).value;
    const convertToPdf = async () => {
        activate_loader(true);
        const imageFormData = new FormData();
        files.forEach(file => imageFormData.append(file.name, file));

        try {
            const response = await axios.post(base_url + 'api/scanned-files/', imageFormData, {
                headers: { 'Authorization': user_profile.token }
            });

            setResultDetail(response.data);
            console.log('File path information:', response.data);

            const pdfResponse = await axios.get(base_url + response.data.file.substring(1) + '/', {
                headers: { 'Authorization': user_profile.token },
                responseType:'arraybuffer'
            });
            console.log('pdf data',pdfResponse.data)
            const pdfBlob = new Blob([pdfResponse.data], { type: 'application/pdf' });
            const url = URL.createObjectURL(pdfBlob);
            const newWin = window.open(`/display-pdf?file=${encodeURIComponent(url)}`, '_blank');
            newWin.focus();

        } catch (error) {
            showAlert(error.message || error, 'red');
        } finally {
            activate_loader(false);
        }
    };

    return (
        <div>
            <h1>PDF Conversion</h1>
            <Upload featureName={'pdf-conversion'} files={files} setFiles={setFiles} />
            {files.length !== 0 && (
                <div id='pdf-conversion-submit-button' className='pdf-conversion-submit-button'>
                    <div onClick={convertToPdf}>
                        Convert
                    </div>
                </div>
            )}
        </div>
    );
}
