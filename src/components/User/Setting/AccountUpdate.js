import { faCircle,faL,faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button } from "react-bootstrap"
export const AccountUpdate=()=>{
    const [isImageUploaded,setIsImageUploaded]=useState(false)
    const [userImage,setUserImage]=useState()
    const checkImageUpload=()=>{
        const imageFiles=document.getElementById('user-pic-update').files;
        if(imageFiles.length!==0){
            setIsImageUploaded(true);
            setUserImage(URL.createObjectURL(new Blob([imageFiles[0]])))
        }
        else{
            setIsImageUploaded(false)
        }
    }
    return(
        <>
        <div className="w-full  bg-gray-100 flex flex-col md:flex-row lg:flex-row  justify-center gap-7 p-10 ">
          <div className=" w-full lg:w-3/5 h-7/5 flex flex-col gap-4  ">
               <div className="w-full bg-white flex flex-wrap justify-between gap-5 py-3 px-10 items-center rounded-sm">
                  <div className="flex items-center gap-7 flex-wrap">
                    <div className={`${!isImageUploaded?'':'hidden'} flex items-center gap-7 `}>
                        <label htmlFor='user-pic-update' style={{fontSize: '2em' }} className="flex items-center justify-center w-20 h-20 border border-black border-dotted rounded-full">
                            <FontAwesomeIcon icon={faCircle} style={{ color: 'lightgray', position: 'absolute', width: '2em', height: '2em' }} />
                            <FontAwesomeIcon icon={faPlus} style={{ position: 'absolute', width: '1em', height: '1em' }} />
                        </label>
                        <input type='file' accept='.png,.jpeg,.jpg' className="hidden" id='user-pic-update' onChange={checkImageUpload}></input> 
                        <label>Upload your profile picture</label>
                    </div>
                    <div className={`${isImageUploaded?'':'hidden'} flex items-center justify-center gap-7 `} id='user-uploaded-pic'>
                        <img className="w-20 h-20  border border-black  rounded-full" src={userImage} alt="user uploaded image">
                        </img>
                        <label>Image Uploaded</label>
                        <Button variant="danger" onClick={()=>{setIsImageUploaded(false)}}>Remove</Button>
                    </div>
                  </div>
                  <Button>Update</Button>
               </div> 
                  <div className="w-full h-full bg-white rounded-sm flex  flex-col p-9 justify-center  gap-8">
                     <h1  className="text-xl font-bold flex justify-center">Account Update</h1>
                     <div className="flex flex-col gap-3">
                        <div className="w-[80%] flex sm:flex-col lg:flex-row md:flex-col gap-3">
                                <label className="font-semibold text-lg text-zinc-900 flex justify-start w-60" >First Name</label>
                                <input  className=" h-10 px-4 w-full flex items-start items-center text-zinc-700 font-mono border border-black    w-full   rounded-sm"  id='first_name'></input>
                                <Button>Update</Button>
                            </div>
                            <div className="w-[80%] sm:flex-col lg:flex-row md:flex-col flex gap-3">
                                <label className="font-semibold text-lg text-zinc-900 flex justify-start w-60" >last Name</label>
                                <input className=" h-10 px-4 w-full text-zinc-700 flex items-start items-center font-mono border border-black  w-full   rounded-sm" id='last_name' ></input>
                                <Button>Update</Button>
                            </div>
                            <div className="w-[80%] sm:flex-col lg:flex-row md:flex-col flex gap-3">
                                <label className="font-semibold text-lg text-zinc-900 flex justify-start w-60" >Email</label>
                                <input  className=" h-10 w-full px-4 flex items-start items-center text-zinc-700 font-mono border border-black    w-full   rounded-sm"  id='first_name'></input>
                                <Button>Update</Button>
                            </div>
                            <div className="w-[80%] sm:flex-col  lg:flex-row md:flex-col flex gap-3">
                            <label className="font-semibold text-lg text-zinc-900 flex justify-start w-60" >Phone Number</label>
                            <input className=" h-10 w-full px-4 text-zinc-700 flex items-start items-center font-mono border border-black  w-full   rounded-sm" id='last_name' ></input>
                            <Button>Update</Button>
                        </div>
                         </div >
                               
                  </div>
               <div>

               </div>

          </div>  
               
        </div>
     </>
    )

}