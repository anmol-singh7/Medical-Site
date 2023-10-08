import React from "react";

import  '../../styles/PersonalInfo.css'
const PersonalInfo =()=>{
return(
    <div className="flex  w-[580px] h-[350px] gap-[2px]">
        <div className="flex flex-col justify-between items-center  bg-white w-[320px] pt-10 pb-6 px-7 rounded-l-[20px] " >
            <img className="profilePic" src="data:image/jpeg;base64,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" alt="" />
            <div className="font-bold text-xl">
                Anmol Singh
            </div>
            <div  className="text-slate-400" style={{whiteSpace:'normal',overflow:'hidden'}}>
                thindanmol173@gmail.com
            </div>
            {/* <div>
                Appointment
            </div> */}
            <div className="flex bg-slate-300 w-[85%] gap-[2px]">
                <div className="bg-white w-[50%] text-center">
                    <div className="font-bold text-2xl">22</div>
                    <div className="text-slate-400">Age</div>
                </div>
                <div className="bg-white w-[50%] text-center">
                    <div className="font-bold text-2xl">3.1</div>
                    <div className="text-slate-400">Bmi</div>
                </div>
            </div>
            <div>
                <button class="bg-[rgb(37,94,214)] hover:bg-blue-400 text-white font-bold py-1 px-[4.5vw] border-b-4 border-blue-700 hover:border-blue-500 rounded-[9px]">
                    Edit
                </button>
            </div>
        </div>
        <div className="flex  px-7 py-5 bg-white w-[70%] rounded-r-[20px] justify-between">
           <div className="flex flex-col justify-around">
            <div>
                    <div className="text-sm text-slate-400">Gender</div>
                    <div className="font-medium">Male</div>
            </div>
                <div>
                    <div className="text-sm text-slate-400">Phone number</div>
                    <div className="font-medium">+91 9056127143</div>
                </div>
                <div>
                    <div className="text-sm text-slate-400">Blood Group</div>
                    <div className="font-medium">A+</div>
                </div>
                <div>
                    <div className="text-sm text-slate-400" >Height</div>
                    <div className="font-medium">175cm</div>
                </div>
            
           </div>
            <div className="flex flex-col justify-around">
                <div>
                    <div className="text-sm text-slate-400" >Birthday</div>
                    <div className="font-medium">may, 05, 2022</div>
                </div>
                <div>
                    <div className="text-sm text-slate-400" >Address</div>
                    <div className="font-medium">Punjab</div>
                </div>
                <div>
                    <div  className="text-sm text-slate-400">Zip Code</div>
                    <div className="font-medium">144628</div>
                </div>
                <div>
                    <div className="text-sm text-slate-400" >Weight</div>
                    <div className="font-medium">69kg</div>
                </div>
           </div>
        </div>
   
    </div>
)

};
export default PersonalInfo