import { useDispatch, useSelector } from "react-redux"
import { setUserInfo } from "../../state/UserInformation/ProfileSlice"

export const Profile=()=>{
    const userInfo=useSelector(state=>state.userProfile)
    const dispatch=useDispatch()
    console.log(userInfo)
    const updateProfile=()=>{
        const userChangedDetail={
            first_name:document.getElementById('first_name').value.trim(),
            last_name:document.getElementById('last_name').value.trim(),
            email:document.getElementById('email').value,
            number:document.getElementById('phone_number').value
        }
        dispatch(setUserInfo(userChangedDetail))
    }
    return(
        <>
           <div className="w-full  bg-gray-100 flex flex-col md:flex-row lg:flex-row  justify-center gap-7 p-10 ">
             <div className=" w-full lg:w-3/5 h-7/5 flex flex-col gap-4  ">
                  <div className="w-full bg-white flex flex-wrap justify-between gap-5 py-3 px-10 items-center rounded-xl">
                     <div className="flex items-center gap-7 flex-wrap">
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" className="h-24 rounded-full" alt=""/>
                            <div className="">
                                <h1  className="text-xl font-bold">{userInfo.username}</h1>
                            </div>
                     </div>
                  </div> 
                     <div className="w-full h-full bg-white rounded-xl flex  flex-col p-9 justify-center  gap-8">
                        <h1  className="text-xl font-bold flex justify-center">User Information</h1>
                        <div className="flex flex-col">
                            <div className="w-full items-start ">
                                <div className="w-[50%]">
                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" >Username</label>
                                        <div  className=" h-10 px-4 w-full  flex items-start items-center text-zinc-700 font-mono border border-black    w-full   rounded-md"  id='first_name'>
                                        {userInfo.username}
                                        </div>
                                    </div>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row gap-2 ">
                                <div className="w-[50%]">
                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" >First Name</label>
                                        <div  className=" h-10 px-4 w-full flex items-start items-center text-zinc-700 font-mono border border-black    w-full   rounded-md"  id='first_name'>
                                        {userInfo.first_name}
                                        </div>
                                    </div>
                                    <div className="w-[50%]">
                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" >last Name</label>
                                        <div className=" h-10 px-4 w-full text-zinc-700 flex items-start items-center font-mono border border-black  w-full   rounded-md" id='last_name' >
                                        {userInfo.last_name}
                                        </div>
                                    </div>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row gap-2 ">
                                <div className="w-[50%]">
                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" >Email</label>
                                        <div  className=" h-10 w-full px-4 flex items-start items-center text-zinc-700 font-mono border border-black    w-full   rounded-md"  id='first_name'>
                                        {userInfo.email}
                                        </div>
                                    </div>
                                    <div className="w-[50%]">
                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" >Phone Number</label>
                                        <div className=" h-10 w-full px-4 text-zinc-700 flex items-start items-center font-mono border border-black  w-full   rounded-md" id='last_name' >
                                        {userInfo.phone_number}
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
