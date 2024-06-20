export const Suggestion=()=>{
    return(
        <>
    <div id="Suggestions " className="mt-7 flex flex-col p-5 gap-2" >
        <textarea placeholder="Any suggestion for us?" className="h-56 p-3 rounded-lg border" required></textarea>
      
        <br/>
        <div class="d-flex ms-5 justify-content-between col-9">
            <p>Select item</p>
            <p class="">Required </p>
        </div>
        <div className="w-full flex justify-center items-center">

        <input type="" class="w-96 h-9 rounded-md border" placeholder="Phone number/Email "/>
        </div>

    <div className="flex w-full justify-center items-center mt-2 ">
              <button className="px-7 py-2 bg-blue-900 text-white font-semibold rounded-md">Submit Suggestion</button>
         </div>
    </div>
        </>
    )
}