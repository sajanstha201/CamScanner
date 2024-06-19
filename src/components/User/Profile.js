export const Profile=()=>{
    return(
        <>
           <div className="w-full  bg-gray-300 flex flex-col md:flex-row lg:flex-row  justify-center gap-7 p-10 ">
             

             <div className=" w-full lg:w-3/5 h-7/5 flex flex-col gap-4  ">
                  <div className="w-full bg-white flex flex-wrap justify-between gap-5 py-3 px-10 items-center rounded-xl">
                     <div className="flex items-center gap-7 flex-wrap">
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" className="h-24 rounded-full" alt=""/>
                            <div className="">
                                <h1  className="text-xl font-bold">Upload a New Photo</h1>
                                <p className="text-zinc-800">profile.jpg</p>
                            </div>
                     </div>

                     <button className="bg-blue-700 px-8 py-2 rounded-xl text-white font-bold mr-6">Update</button>
                      
                  </div> 

                     <div className="w-full h-full bg-white rounded-xl flex  flex-col p-9 justify-center  gap-8">
                        <h1  className="text-xl font-bold flex justify-center">Change User Information Here</h1>
                          <div className="flex  w-full h-full justify-center  ">
                                <div className="flex w-96 lg:w-[500px]  justify-center flex-col gap-2">
                                              <div className="w-full flex gap-6">
                                                        <div className="">
                                                            <label className="font-semibold text-lg text-zinc-900 flex justify-start" >First Name</label>
                                                            <input  value="Bikash" className=" h-10 px-4 text-base text-zinc-700 font-mono border border-black active:border-blue-500   w-full   rounded-md" type="text"/>
                                                        </div>
                                                        <div className="div">
                                                            <label className="font-semibold text-lg text-zinc-900 flex justify-start" >last Name</label>
                                                            <input  value="Bhandari" className=" h-10 px-4 text-base text-zinc-700 font-mono border border-black active:border-blue-500   w-full   rounded-md" type="text"/>
                                                        </div>
                                              </div>
                                              <div className="flex w-full gap-5">
                                                       <div>

                                                         <label className="font-semibold text-lg text-zinc-900 flex justify-start " for="username">Username</label>
                                                         <input  value="bikashffx" className=" h-10 px-4 text-base text-zinc-700 font-mono border border-black active:border-blue-500   w-full  rounded-md" type="text"/>
                                                       </div>

                                                   <div >

                                                        <label className="font-semibold text-lg text-zinc-900 flex justify-start" for="">Phone Number</label>
                                                        <input  value="9872312414" className=" h-10 px-4 text-base text-zinc-700 font-mono border border-black active:border-blue-500   w-full   rounded-md" type="number"/>   
                                                  </div>     
                                             </div>
                                             
                                                   <div className="flex flex-col justify-start">

                                             
                                             <label className="font-semibold text-lg text-zinc-900  flex justify-start">Email</label>
                                             <input value="bikash@gmail.com" className=" h-10 px-4 text-base text-zinc-700 font-mono border border-black active:border-blue-500   w-96   rounded-md" type="email" />
                                                   </div>
                                             
                                             <div className="flex items-end mt-6 ">
                                         <button className="bg-blue-700 px-8 py-2 rounded-xl text-white font-bold mr-6">Update Information </button>
                                                    
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
