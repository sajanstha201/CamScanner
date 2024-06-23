import { setUserInfo,setIsLogin,setToken } from "../../state/UserInformation/ProfileSlice"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { showAlert } from "../AlertLoader"
export const Profile=()=>{
    const userInfo=useSelector(state=>state.userProfile)
    const dispatch=useDispatch()
    const baseUrl=useSelector((state)=>state.baseUrl).backend
    const [userImage,setUserImage]=useState()
    useEffect(()=>{
        try{
          if(localStorage.getItem('token')){
            const getUserInfo=async()=>{
              console.log(localStorage.getItem('token'))
              
              const response=await axios.get(baseUrl+'api/users/get-user-info/',
                {headers:{
                'Authorization':'Token '+localStorage.getItem('token')
              }})
              console.log('Response from profile section',response.data)
              dispatch(setUserInfo(response.data))
              const imageResponse=await axios.get(baseUrl+response.data.photo.substr(1),{responseType: 'arraybuffer'})
              console.log(imageResponse.data)
              setUserImage(URL.createObjectURL(new Blob([imageResponse.data], { type: 'image/png' })));
            }
            getUserInfo();
          }
        }
        catch(error){
          console.log(error)
          showAlert(error,'red')
        }
      },[])
    return(
        <>
           <div className="w-full  bg-gray-100 flex flex-col md:flex-row lg:flex-row  justify-center gap-7 p-10 min-h-[80vh]">
             <div className=" w-full lg:w-3/5 h-7/5 flex flex-col gap-4  ">
                  <div className="w-full bg-white flex flex-wrap justify-between gap-5 py-3 px-10 items-center rounded-sm">
                     <div className="flex items-center gap-7 flex-wrap">
                           <img src={userImage} className="h-24 rounded-full" alt=""/>
                            <div className="">
                                <h1  className="text-xl font-bold">{userInfo.username}</h1>
                            </div>
                     </div>
                  </div> 
                     <div className="w-full h-full bg-white rounded-sm flex  flex-col p-9 justify-center  gap-8">
                        <h1  className="text-xl font-bold flex justify-center">Account</h1>
                        <div className="flex flex-col">
                            <div className="w-full items-start ">
                                <div className="w-[50%]">
                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" >Username</label>
                                        <div  className=" h-10 px-4 w-full  flex items-start items-center text-zinc-700 font-mono border border-black    w-full   rounded-sm"  id='first_name'>
                                        {userInfo.username}
                                        </div>
                                    </div>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row gap-2 ">
                                <div className="w-[50%]">
                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" >First Name</label>
                                        <div  className=" h-10 px-4 w-full flex items-start items-center text-zinc-700 font-mono border border-black    w-full   rounded-sm"  id='first_name'>
                                        {userInfo.first_name}
                                        </div>
                                    </div>
                                    <div className="w-[50%]">
                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" >last Name</label>
                                        <div className=" h-10 px-4 w-full text-zinc-700 flex items-start items-center font-mono border border-black  w-full   rounded-sm" id='last_name' >
                                        {userInfo.last_name}
                                        </div>
                                    </div>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row gap-2 ">
                                <div className="w-[50%]">
                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" >Email</label>
                                        <div  className=" h-10 w-full px-4 flex items-start items-center text-zinc-700 font-mono border border-black    w-full   rounded-sm"  id='first_name'>
                                        {userInfo.email}
                                        </div>
                                    </div>
                                    <div className="w-[50%]">
                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" >Phone Number</label>
                                        <div className=" h-10 w-full px-4 text-zinc-700 flex items-start items-center font-mono border border-black  w-full   rounded-sm" id='last_name' >
                                        {userInfo.contact}
                                    </div>
                            </div>
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
