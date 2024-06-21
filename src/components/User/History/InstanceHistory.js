import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faL } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
export const InstanceHistory=({featureName,instanceHistoryData,downloadFile})=>{
    const [imageUrl,setImageUrl]=useState('')
    useEffect(() => {
        const fetchImage = async () => {
          try {
            var imageUrl=null;
            switch(featureName){
              case 'pdfConversion':
                  imageUrl=instanceHistoryData.pages[0].image;
                  break;
              case 'tableExtraction':
                  imageUrl=instanceHistoryData.image;
                  break;
              case 'DocumentAnalysis':
                  imageUrl=instanceHistoryData.image;
              default:
                imageUrl=null;
            }
            const response = await axios.get(imageUrl, {
              headers: {
                'Authorization': 'Token ' + localStorage.getItem('token')
              },
              responseType: 'arraybuffer'
            });
            const blob = new Blob([response.data], { type: 'image/png' });
            const objectUrl = URL.createObjectURL(blob);
            setImageUrl(objectUrl);
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        };
    
        fetchImage();
      }, [instanceHistoryData.pages]);
    return(
        <div className={`border bg-[white] hover:bg-gray-100 h-20 w-full flex  items-center jusitfy-center  relative cursor-pointer`}>
            <div className="absolute left-2 h-full w-10  flex  items-center jusitfy-center ">
                <img src={imageUrl} alt={instanceHistoryData.id}>
                </img>
            </div>
            <div className="absolute left-16 ">
                {instanceHistoryData.file.split('/').pop()}
            </div>
            <div className="absolute left-[50%] ">
                {instanceHistoryData.created}
            </div>  
            <div className="absolute right-3 ">
                    <FontAwesomeIcon icon={faDownload} onClick={()=>{downloadFile(instanceHistoryData)}}/>
            </div>
        </div>
    )
}