import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus ,faCircle } from '@fortawesome/free-solid-svg-icons';
export const Report=()=>{
    const [reportImage,setReportImage]=useState([])
    const [reportDescription,setReportDescription]=useState('')
    const [email,setEmail]=useState()
    const submitReport=()=>{
        console.log('slkajsdfkjl')
        console.log(reportImage,reportDescription,email)
    }
    return(
        <>
         <div className="mt-14 flex flex-col flex-wrap gap-4 w-full p-5" >
        <div className="flex flex-col items-start ">
              

            <p className="m-0 p-0 text-danger">Describe the issue you've encountered here.</p>
            
            <p className="m-0 p-0 text-danger" >1. In what app or on what page have you encountered the issue?</p>
            
            <p className="m-0 p-0 text-danger">2. After what actions that you performed did the issue appear?</p>
            
            <p className=" text-danger">3. Give us the additional information that might help us fix the issue.</p>
              
        </div>

 
         <div className="w-full ">

        <textarea placeholder="Discribe your issue" id="message" class="mt-1 w-full rounded-md border p-2 h-60" required onChange={(e)=>setReportDescription(e.target.value)}></textarea>
        
         </div>


        
        <div className="flex w-full pl-10 h-[200px] bg-white rounded-xl">
            <div  className='flex flex-col items-center justify-center m-3 items-start '>
                <label htmlFor='report-image' style={{fontSize: '2em' }} className="flex items-center justify-center w-full h-[50%]">
                    <FontAwesomeIcon icon={faCircle} style={{ color: 'lightgray', position: 'absolute', width: '2em', height: '2em' }} />
                    <FontAwesomeIcon icon={faPlus} style={{ position: 'absolute', width: '1em', height: '1em' }} />
                </label>
                <input type='file' className="hidden"multiple id='report-image' accept=".png,.jpg,.jpeg" onChange={(e)=>{setReportImage(prevData=>[...prevData,...e.target.files])}}></input> 
                <label>Upload Images</label>
            </div>
            <div className="flex flex-wrap overflow-auto">
                {reportImage.length!==0&&<>
                    {reportImage.map((img, index) => (
                        <div key={index} index={index} className="w-[80px] h-[100px] m-2 flex justify-center items-center overflow-hidden relative border border-black rounded-xl">
                        <img src={URL.createObjectURL(new Blob([img],{ type: 'image/png' }))} alt={`Report ${index}`} />
                        <div onClick={(e)=>{setReportImage(prevData=>prevData.filter((value,index)=>(parseInt(index)!==parseInt(e.target.parentNode.getAttribute('index'))))
                            )}}
                             className="bg-red-500 absolute w-[12px] h-[12px] right-1 top-1 rounded-full"></div>
                        </div>
                    ))}
                </>}
            </div>
        </div>
        
           <div className="flex items-center justify-center ">
           <label className="mr-5">Email: </label>
            <input className="h-10 rounded-md border w-96 p-4" placeholder="Email " type="email" onChange={(e)=>setEmail(e.target.value)}/>
           </div>
        <br/>
         <div className="flex w-full justify-center ">
              <button className="px-7 py-2 bg-blue-900 text-white font-semibold rounded-md" onClick={submitReport}>Submit Report !</button>
         </div>
       
    </div>
        </>
    )
}