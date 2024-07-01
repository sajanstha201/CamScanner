import { useEffect } from 'react';
import './InputUpload.css';
import { useMediaQuery } from 'react-responsive';

function InputUpload({ featureName, setFiles, files }) {
    const isMobile=useMediaQuery({query:'(max-width:600px)'})
  const changeInput = () => {
    setFiles(prevFiles => ({
      ...prevFiles,
      inputFiles: [
        ...prevFiles.inputFiles,
        ...document.getElementById(featureName + '-upload-input-files').files
      ]
    }));
  };

  return (
    <div id={featureName + "upload-outer-container"} className={`mx-auto mt-5 bg-gray-200 ${isMobile?'w-1/2':'w-1/3'} h-[30vh] rounded-lg shadow-inner flex items-center justify-center mb-3`}>
      {featureName === 'imageConversion' ? (
        <>
          <label htmlFor={featureName + '-upload-input-files'} id={featureName + '-upload-container'} className="w-1/2 h-3/5 flex items-center flex-col justify-center rounded-lg shadow-inner bg-gray-300  ">
            <p className={`${isMobile?'text-[10px]':'text-sm'}`}>Upload PDF</p>
          </label>
          <input type="file" id={featureName + '-upload-input-files'} accept=".pdf" className="hidden" multiple onChange={changeInput} />
        </>
      ) : (
        <>
          <label htmlFor={featureName + '-upload-input-files'} id={featureName + '-upload-container'} className="w-1/2 h-3/5 flex items-center flex-col justify-center rounded-lg shadow-inner bg-gray-300 ">
            <p className={`${isMobile?'text-[10px]':'text-sm'}`}>Upload Images</p>
          </label>
          {featureName === 'pdf-conversion' ? (
            <input type="file" id={featureName + '-upload-input-files'} accept=".png" className="hidden" multiple onChange={changeInput} />
          ) : (
            <input type="file" id={featureName + '-upload-input-files'} accept=".png" className="hidden" onChange={changeInput} />
          )}
        </>
      )}
    </div>
  );
}

export default InputUpload;
