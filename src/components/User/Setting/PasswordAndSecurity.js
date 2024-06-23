import { Button } from "react-bootstrap"

export const PasswordAndSecurity=()=>{
    return(
        <div className="flex justify-center w-full bg-gray-100 h-full p-10">
        <div className="bg-white rounded-xl">
      <div className="p-10 flex items-start flex-col gap-3">
            <h2>Change Password</h2>
            <div className="flex items-start flex-col">
                <label>Old Password</label>
                <input type='password' className="border border-black w-[250px] h-10 rounded-sm"></input>
            </div>
            <div className="flex items-start flex-col">
                <label>New Password</label>
                <input type='password' className="border border-black w-[250px] h-10 rounded-sm"></input>
            </div>
            <div className="flex items-start flex-col">
                <label>Confirm Password</label>
                <input type='password' className="border border-black w-[250px] h-10 rounded-sm"></input>
            </div>
            <div>
                <Button>Update</Button>
            </div>
        </div>
        </div>

        </div>
 
    )
}