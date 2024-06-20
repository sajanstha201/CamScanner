export const Report=()=>{
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

        <textarea placeholder="Discribe your issue" id="message" class="mt-1 w-full rounded-md border p-2 h-60" required></textarea>
        
         </div>


        
        <div className="flex justify-start gap-32 pl-24">
            <p>Select item</p>
            <p className="">Required </p>
        </div>
        
           <div className="flex  ">
           <label className="mr-5">Phone number/Email: </label>
        <input className="h-10 rounded-md border w-96" placeholder="Phone number/Email " type="text" />
           </div>
        <br/>
         <div className="flex w-full justify-center ">
              <button className="px-7 py-2 bg-blue-900 text-white font-semibold rounded-md">Submit Report !</button>
         </div>
       
    </div>
        </>
    )
}